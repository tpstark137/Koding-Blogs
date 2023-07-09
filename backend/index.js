const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tpaulbe21:Tusshar123@cluster0.cuy5hvb.mongodb.net/?retryWrites=true&w=majority')
const port = 4000
const User = require('./models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser= require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json())
app.use(cookieParser());

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userD = await User.create({
            username,
            email,
            password: bcrypt.hashSync(password, salt)
        })

        res.json(userD)
    }
    catch (err) {
        console.log(err)
    }
    console.log("Success")


    res.send('Hello World!')
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});
app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);
    });
  });
  
  app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
