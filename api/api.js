require("dotenv").config();
require("./mongoose")

const express = require("express")
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const path =require("path")
const register = require("./middlewares/register")
const send = require("./middlewares/jwt")
const login = require("./middlewares/login")
app.use(cors())
app.use(express.json())


app.use(express.static(path.join(__dirname,"public")))


app.post("/register/user",register.register)
app.post("/login/user",login.login, send.sendToken)
app.post("/login/verify",send.veryToken)

app.listen(port,() => {
  console.log("servidor arrancado")
})


