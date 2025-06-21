import express from "express";
import connectDB from "./config/db.js";
import hbsConfig from "./config/hbs.js";
import cookieParser from "cookie-parser";
import { auth } from "./middlewares/authMiddleware.js";
import routes from "./routes.js";

// Init express instance
const app = express();

app.use(express.static('src/public'));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(auth);

hbsConfig(app);

connectDB();

app.use(routes);

app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
});