const mongo = require("mongoose")

const schema = mongo.Schema // invoco la clase schema de mongo

// creo las clases de schema de mongo

const userSchema = new schema({
  user: { type: String, required:true,minlength:[6,"el nombre debe ser mas larga"],maxlength:[18,"el nombre es demasiado largo"] },
  password: { type: String, required:true },
  email:{type:String,required:true}
})

const User = mongo.model("User", userSchema);


module.exports = User