const express = require("express");
const { Router } = require("express");
const router = Router();
const userSignin = require('../controllers/userSignin')
const userLogin = require("../controllers/userLogin")


router.use(express.urlencoded({ extended: false }));


router.get('/login',  (req,res) => {
   res.render('Login')
});

router.post('/login', async (req,res) => {
    const {PhoneNumber, Password} = req.body;
    await userLogin.create({
        PhoneNumber,
        Password,

    })
    return res.redirect("/chat")
})
router.get('/signin', (req,res) => {
    return res.render("Signin")
})
router.post('/signin', async (req,res) => {
   const { EmailAddress, PhoneNumber, Password } = req.body;
    await userSignin.create({
        EmailAddress,
        PhoneNumber,
        Password,

    });
    return res.redirect('/login')
});

router.get('/chat', (req,res) => {
    return res.render('Chatpage')
});



module.exports = router;
