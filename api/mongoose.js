

const mongo = require("mongoose")
const pass = process.env.pass
const base = process.env.base

const connectString = `mongodb+srv://ArrowFood:${pass}@cluster0.pb4mz.mongodb.net/${base}?retryWrites=true&w=majority`;

mongo.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(res => console.log("se ha conectado a la base: ", res.connection.name))
.catch(err => console.log(err))
