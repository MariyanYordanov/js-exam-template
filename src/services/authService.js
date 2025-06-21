import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function register(email, password, rePassword) {

    if (password !== rePassword) {
        throw new Error('Passwords do not match');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    const user = await User.create({ email, password });

    const token = generateToken(user);

    return token;
}

async function login(email, password) {

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid password');
    }

    const token = generateToken(user);

    return token;
}

function logout(req, res) {

    res.clearCookie(process.env.COOKIE_NAME);

    res.locals.user = null;
    req.user = null;

    console.log('User logout successfully!');
}
function generateToken(user) {

    const payload = { id: user._id, email: user.email };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
}

export default {
    register,
    login,
    logout
};