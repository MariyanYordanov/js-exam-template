import { Router } from 'express';
import { auth, isAuthenticated } from './middlewares/authMiddleware.js';

import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use(homeController);
routes.use('/auth', authController);
// routes.use('/movies/create', isAuthenticated, moviesController);

routes.all('*url', (req, res) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

export default routes;