const User = require("../model/user");

exports.register = function (req, resp, next) {
  const { user, password, email } = req.body;
  User.findOne({ user: user, email: email })
    .then((resp1) => {
      if (resp1 === null) {
        const newUser = new User({
          user: user,
          password: password,
          email: email,
        });

        newUser.save().then( // error de validacion 
          (doc) => {
            console.log("guardado");
            resp.status(200).send({user:doc.user });
          },
          (err) => {
            if (err) {
              console.log(err.message);
              resp.send(err.message);
            }
          }
        );
        /* newUser.save((err,doc) => {
          if (err) {
            resp.status(403).send(err.message)
          } else {
            resp.send(doc)
          }
        })
      } else {
        resp.send({err:"usuario ya existe"}) */
      } else { // si ya existe el usuario
        resp.send({"err":"usuario ya existe"})
      }
    })
    .catch((err) => {
      console.log(err);
      resp.status(403);
    });
};
