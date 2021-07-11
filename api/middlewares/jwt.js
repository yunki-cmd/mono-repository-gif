const jwt = require("jsonwebtoken")

exports.sendToken = function (req, resp) {
  const user = req.body.user;
  const password = req.body.password;
  const token = jwt.sign(
    {
      user: user,
      password: password,
    },
    process.env.secret,
    { expiresIn: 60 * 60 },
    {algorithm:"RS256"},
  );
  resp.send({ token:token })
}

exports.veryToken = function (req, resp, next) {
  const token = req.body.token
  jwt.verify(token, process.env.secret, (err, decode) => {
    if (err) {
      resp.status(403).send({"token":"error"})
    } else {
      console.log(decode.user);
      resp.status(200).send({"status":"ok"})
    }
  })
}