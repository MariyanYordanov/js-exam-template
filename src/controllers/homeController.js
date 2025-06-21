import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home', { title: 'Home' })
});

export default homeController;