const express = require('express');
// require('firebase/auth');
const app=express();
// Middleware to parse JSON requests
app.use(express.json());

//firebase-admin is package use to connect with firebase
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccount.js.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

  // Signup route
module.exports.signup=('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCredential = await admin.auth().createUser({
        email:email,
        password:password,
        emailVerified:false,
        disabled:false
      }) 
      res.status(201).json(userCredential);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports.signin=('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCredential = await admin.auth().get({
        email:email,
        password:password,
        emailVerified:false,
        disabled:false
      }) 
      res.status(201).json(userCredential);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });