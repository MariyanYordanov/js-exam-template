import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isGuest, isAuthenticated } from "../middlewares/authMiddleware.js";
import { setSuccessMessage, setErrorMessage } from "../middlewares/tempDataMiddleware.js";

const authController = Router();

authController.get("/register", isGuest, (req, res) => {
    const formData = req.session.formData || {};
    delete req.session.formData;

    res.render("auth/register", {
        pageTitle: "Register",
        email: formData.email
    });
});

authController.post("/register", isGuest, async (req, res) => {
    const { email, password, rePassword } = req.body;

    if (!email || !password || !rePassword) {
        req.session.formData = { email };
        setErrorMessage(req, "All fields are required");
        return res.redirect("/auth/register");
    }

    try {
        const token = await authService.register(email, password, rePassword);
        delete req.session.formData;
        res.cookie(process.env.COOKIE_NAME, token);

        setSuccessMessage(req, "Registration successful! Welcome!");
        res.redirect("/");

    } catch (err) {
        req.session.formData = { email };
        const errorMessage = getErrorMessage(err);
        setErrorMessage(req, errorMessage);
        res.redirect("/auth/register");
    }
});

authController.get("/login", isGuest, (req, res) => {
    const formData = req.session.formData || {};
    delete req.session.formData;

    res.render("auth/login", {
        pageTitle: "Login",
        email: formData.email
    });
});

authController.post("/login", isGuest, async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        req.session.formData = { email };
        setErrorMessage(req, "All fields are required");
        return res.redirect("/auth/login");
    }

    try {
        const token = await authService.login(email, password);
        delete req.session.formData; 
        res.cookie(process.env.COOKIE_NAME, token);

        setSuccessMessage(req, "Login successful!");
        res.redirect("/");
    } catch (err) {
        req.session.formData = { email };
        const errorMessage = getErrorMessage(err);
        setErrorMessage(req, errorMessage);
        res.redirect("/auth/login");
    }
});

authController.get("/logout", isAuthenticated, (req, res) => {
    authService.logout(req, res);
    setSuccessMessage(req, "Logout successful!");
    res.redirect("/");
});

export default authController;