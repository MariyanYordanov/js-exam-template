import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get("/register", (req, res) => {

    res.render("auth/register", { pageTitle: "Register" });

});

authController.post("/register", async (req, res) => {

    const { email, password, rePassword } = req.body;

    if (!email || !password || !rePassword) {
        return res.status(400).render("auth/register", {
            error: "All fields are required",
            email,
            pageTitle: "Register"
        });
    }
    try {
        const token = await authService.register(email, password, rePassword);

        res.cookie(process.env.COOKIE_NAME, token);

        console.log("User registered successfully");

        res.redirect("/");

    } catch (err) {

        const errorMessage = getErrorMessage(err);

        res.status(400).render("auth/register", {
            error: errorMessage,
            email,
            pageTitle: "Register"
        });
    }
});

authController.get("/login", (req, res) => {

    res.render("auth/login", { pageTitle: "Login" });

});

authController.post("/login", async (req, res) => {
    
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).render("auth/login", {
            error: "All fields are required",
            email,
            pageTitle: "Login"
        });
        return;
    }

    try {
        const token = await authService.login(email, password);
        res.cookie(process.env.COOKIE_NAME, token);
        res.redirect("/");
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        res.status(400).render("auth/login", {
            error: errorMessage,
            email,
            pageTitle: "Login"
        });
    }
});

authController.get("/logout", (req, res) => {
    authService.logout(req, res);
    res.redirect("/");
});

export default authController;