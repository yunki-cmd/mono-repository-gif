require("dotenv").config();
require("./mongoose")

const express = require("express")
const app = express();
const port = 5000 || process.env.port;
const cors = require("cors");
const path =require("path")
const register = require("./middlewares/register")
const send = require("./middlewares/jwt")
const login = require("./middlewares/login")
app.use(cors())
app.use(express.json())


app.use(express.static(path.join(__dirname,"public")))


app.get("/", (req, res) => {
  console.log(build);
  res.sendFile(path.join(__dirname ,"public","index.html"));
})

app.post("/register",register.register)
app.post("/login",login.login, send.sendToken)
app.post("/login/verify",send.veryToken)

app.listen(port,() => {
  console.log("servidor arrancado")
})


