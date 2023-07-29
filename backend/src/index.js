const express = require('express');
const mongoose = require('mongoose');
const { ServerConfig } = require('./config')

const app = express();

/* Express Server Connection */
app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

/* MongoDB Mongoose ODM Connection */
mongoose.connect(process.env.URI).then(()=>{
    console.log("MongoDB connection successful");
}).catch((error)=>{
    console.log("Error in connecting to MongoDb " + error);
})