const express= require('express');
const mongoose = require('mongoose');
const User =  require('../DB/User');

const route = express.Router();


route.post('/', async (req,res) => {
  const {username,password} = req.body;
  console.log(req.body);
  let user ={};
  user.username = username;
  user.password = password;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get('/:username',async (req,res) => {
  console.log(req.params.username);
try {
  const user = await User.find({ 'username' : req.params.username});
  res.json(user);
  console.log(req.params.username);
}catch(err) {
 res.json({message : err});
}
});



module.exports = route;