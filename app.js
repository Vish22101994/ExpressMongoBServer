const express = require('express');
const connectDb = require('./DB/connection');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/userModel',require('./API/User'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const Port  = process.env.Port || 3000;
app.listen(Port , () => {
  console.log("Server Started");
});

connectDb();