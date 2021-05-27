const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/messages");
const authRoute =require('./routes/auth');
const userRoute = require("./routes/users");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db=require('./key/keys').mongoURI;


//connect mongo database 
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},
    )
.then(()=>console.log('MongoDb connected ...'))
.catch(err=>console.log(err));

//middleware
app.use(express.json());
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);


app.listen(8800, () => {
    console.log("Backend server is running!");
  });