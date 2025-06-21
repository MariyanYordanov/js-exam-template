import { Router } from 'express';

import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use(homeController);
routes.use('/auth', authController);

routes.all('*url', (req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

export default routes;