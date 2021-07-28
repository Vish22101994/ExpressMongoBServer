const mongoose = require('mongoose');

const URI = "mongodb+srv://pigguDB:pigguDB@cluster0.dwzhf.mongodb.net/Users?retryWrites=true&w=majority";


const connectDB = async () => {
 await mongoose.connect(URI, { useUnifiedTopology: true , useNewUrlParser: true });
  console.log("DB COnnected");
}


module.exports = connectDB;