import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    
    const token = req.cookies[process.env.COOKIE_NAME];

    if (!token) {
        return next();
    }

    try {
        const { id, email } = jwt.verify(token, process.env.JWT_SECRET);

        req.isAuthenticated = true;
        req.user = { id, email };
        res.locals.user = { id, email };
        
        next();

    } catch (err) {

        console.error("Invalid token:", err);

        res.clearCookie(process.env.COOKIE_NAME);

        res.redirect('/auth/login');
    }
}

export const isAuthenticated = (req, res, next) => {

    if (!req.user) {

        return res.redirect('/auth/login');
    }

    next();
}