import dotenv from "dotenv";
dotenv.config();

import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import hbsConfig from "./config/hbs.js";
import routes from "./routes.js";
import { auth } from "./middlewares/authMiddleware.js";
import { tempDataMiddleware } from "./middlewares/tempDataMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('src/public'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 3_600_000
    }
}));
app.use(express.urlencoded({ extended: true }));
app.use(tempDataMiddleware);
app.use(auth);

hbsConfig(app);
connectDB();

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});