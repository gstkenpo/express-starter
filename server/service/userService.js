const { mongoose } = require("mongoose");
const {User} = require("../model/user")

const createUser = async (userName, email, password) => {
    const user = new User({userName: userName, email, email, password, password});
    return await user.save();
}

const findByEmail = async (email) => {
    if (!email) return Promise.reject();
    return await User.find({email: email}).exec();
}

const findByUserName = async (userName) => {
    if (!userName) return Promise.reject();
    return await User.find({userName: userName}).exec();
}

const deleteByEmail = async (email) => {
    if (!email) return Promise.reject();
    return await User.deleteOne({email: email}).exec();
}

exports.createUser = createUser;
exports.findByEmail = findByEmail;
exports.findByUserName = findByUserName;
exports.deleteByEmail = deleteByEmail;