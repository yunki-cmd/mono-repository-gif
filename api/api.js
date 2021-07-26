require("dotenv").config();
require("./mongoose")

const express = require("express")
const app = express();
const port = 5000;
const cors = require("cors");

const register = require("./middlewares/register")
const send = require("./middlewares/jwt")
const login = require("./middlewares/login")
app.use(cors())
app.use(express.json())
app.get("/", (req, resp) => {
  resp.send(`<h1>Hello<h1>`)
})

app.post("/register",register.register)
app.post("/login",login.login, send.sendToken)
app.post("/login/verify",send.veryToken)

app.listen(port,() => {
  console.log("servidor arrancado")
})


