const express=require('express')
require('dotenv').config()
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passportSetup=require("./passport.js")

const authRoute=require("./routes/auth.js")
const connectToMongoo=require('./database/connection.js')
const app=express()
connectToMongoo()

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

app.use("/auth",authRoute)

app.listen("5000",()=>{
    console.log("server is running")
})