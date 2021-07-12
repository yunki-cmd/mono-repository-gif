require("dotenv").config();
require("./mongoose")
const User = require("./model/user")
const express = require("express")
const app = express();
const port = 5000;
const cors = require("cors");


const send = require("./middlewares/jwt")
const login = require("./middlewares/login")
app.use(cors())
app.use(express.json())
app.get("/", (req, resp) => {
  resp.send(`<h1>Hello<h1>`)
})
app.post("/register", (req, resp) => {
  const { user, password, email } = req.body
  User.find({ user: user ,email:email })
    .then(resp1=> {
      if (resp1.length === 0) {
        const newUser = new User({
          user: user,
          password: password,
          email:email
        })

        newUser.save()
          .then(doc => {
            console.log("guardado")
            resp.status(200).send(doc)
          }, err => {
            if (err) {
              console.log(err.message)
              resp.send(err.message)
            }
          })
        /* newUser.save((err,doc) => {
          if (err) {
            resp.status(403).send(err.message)
          } else {
            resp.send(doc)
          }
        })
      } else {
        resp.send({err:"usuario ya existe"}) */
    } 
  })
    .catch(err => {
      console.log(err)
      resp.status(403)
    })
})
app.post("/login",login.login, send.sendToken)
app.post("/login/verify",send.veryToken)

app.listen(port,() => {
  console.log("servidor arrancado")
})


