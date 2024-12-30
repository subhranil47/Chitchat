const JWT = require('jsonwebtoken');

const secret = '$upermon@234';

function createTokens(user) {
    const payload = {
        EmailAddress : user.EmailAddress,
        PhoneNumber: user.PhoneNumber,
        Password: user.Password,

    };
    const token = JWT.sign(payload,secret);
    return token
}