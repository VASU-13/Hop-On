const express = require('express');
const mongoose = require('mongoose');
const { ServerConfig } = require('./config')
const userRoute =  require('./routes/userRoute');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/v1/user',userRoute);

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