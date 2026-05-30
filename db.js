const env = require('dotenv');
env.config();
const url = process.env.DB_URL;
const mongoose = require('mongoose')

mongoose.connect(url).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
})

module.exports = mongoose;
