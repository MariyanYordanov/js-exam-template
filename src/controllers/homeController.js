import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' })
});

homeController.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About' })
});

export default homeController;