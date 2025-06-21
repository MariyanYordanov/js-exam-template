import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get("auth/register", (req, res) => {

    res.render("auth/register", { pageTitle: "Register" });

});

authController.post("auth/register", async (req, res) => {

    const { email, password, rePassword } = req.body;

    try {
        const token = await authService.register(email, password, rePassword);

        res.cookie('auth', token);

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

authController.get("auth/login", (req, res) => {

    res.render("auth/login", { pageTitle: "Login" });

});

authController.post("auth/login", async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {

        const errorMessage = getErrorMessage(err);

        res.status(400).render("auth/login", {
            error: errorMessage,
            email,
            pageTitle: "Login"
        });
        return;
    }   

    try {
        
        const token = await authService.login(email, password);

        res.cookie('auth', token);

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

authController.get("auth/logout", (req, res) => {
    authService.logout(req, res);
    res.redirect("/");
});

export default authController;