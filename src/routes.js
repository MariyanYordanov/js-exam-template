import { Router } from 'express';

import homeController from "./controllers/homeController.js";
const routes = Router();

routes.use(homeController);

routes.all('*url', (req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

export default routes;