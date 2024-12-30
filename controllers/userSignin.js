const {Schema, model} = require('mongoose');

const SigninSchema = new Schema({
    EmailAddress: {
        type: String,
        required: true,
    },

    PhoneNumber: {
        type: Number,
        required: true,
    },

    Password: {
        type: String,
        required: true,
    },


},
{
    timestamps: true,
}
);

const Signin = model("Signin", SigninSchema);

module.exports = Signin;