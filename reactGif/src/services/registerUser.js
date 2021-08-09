

function Register({ nombre, email, password }) {
  const datos = {
    user: nombre,
    password: password,
    email:email
  }
  return fetch("/register/user", {
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(datos)
  });
}
export default Register