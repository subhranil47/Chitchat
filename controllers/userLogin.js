const {Schema, model } = require('mongoose');

const LoginSchema = new Schema ( {
    PhoneNumber: {
        type: Number,
        required: true,
    },
    
    Password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})


const Login = model("Login", LoginSchema)

module.exports = Login