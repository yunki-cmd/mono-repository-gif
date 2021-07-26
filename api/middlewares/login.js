/* const fs = require("fs");
const path = require("path");

exports.login = function (req, resp, next) {
  const { user, password } = req.body
  const datos = fs.readFileSync(path.join(__dirname, "../data/dataUser.json"));
   const data = JSON.parse(datos)
  if (user === data.user && password === data.password) {
    next()
  } else {
    resp.status(403).send({"status":"error"});
  }
}  
 */
const User = require("../model/user")


exports.login = function (req, resp, next) {
  const { user, password } = req.body
  User.findOne({ user: user, password: password })
    .then(res => {
      if ( res !== null) {
        next()
      } else {
        resp.send({"error":"no se ha encontrado el usuario"})
      }
    })
}