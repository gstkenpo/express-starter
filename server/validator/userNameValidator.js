const userService = require('../service/userService');

const duplicateUserName = (userName) => {
    if (!userName) return Promise.reject('User Name is empty');
    return userService.findByUserName(userName)
    .then(user => {
        if (user.length > 0) return Promise.reject('User Name already in use');
    })
}

module.exports.duplicateUserName = duplicateUserName;