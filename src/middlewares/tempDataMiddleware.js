export const tempDataMiddleware = (req, res, next) => {
    
    res.locals.successMessage = req.session.successMessage;
    res.locals.errorMessage = req.session.errorMessage;
    res.locals.warningMessage = req.session.warningMessage;

    delete req.session.successMessage;
    delete req.session.errorMessage;
    delete req.session.warningMessage;

    next();
};

export const setSuccessMessage = (req, message) => {
    req.session.successMessage = message;
};

export const setErrorMessage = (req, message) => {
    req.session.errorMessage = message;
};

export const setWarningMessage = (req, message) => {
    req.session.warningMessage = message;
};