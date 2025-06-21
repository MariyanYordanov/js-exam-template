import jwt from 'jsonwebtoken';
import { secret } from '../config/secret.js';

export const auth = (req, res, next) => {
    const token = req.cookies.auth;

    if (!token) {
        return next();
    }

    try {
        const { id, email } = jwt.verify(token, secret);
        req.user = { id, email };
        res.locals.user = { id, email };
        next();
    } catch (err) {
        console.error("Invalid token:", err);
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
}

export const isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    next();
}