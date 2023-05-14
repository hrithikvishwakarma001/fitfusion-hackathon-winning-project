const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    gender: String,
    phone: Number,
    email: String,
    password: String,
    img: String,
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true,versionKey:false })
const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;