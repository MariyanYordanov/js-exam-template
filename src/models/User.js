import {Schema, model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email must be unique."],
        minlength: [10, "Email must be at least 10 characters long."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [6, "Password must be at least 6 characters long."],
        // valid pass must contain only English letters and digits
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: 'Password must contain only English letters and digits'
        },
        maxlength: [6, "Password cannot exceed 6 characters."],
    },
});

userSchema.path("email").validate((email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}, "Invalid email format");

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const User = model('User', userSchema);

export default User;