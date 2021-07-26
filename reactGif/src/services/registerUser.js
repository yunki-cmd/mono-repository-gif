

function Register({ nombre, email, password }) {
  const datos = {
    user: nombre,
    password: password,
    email:email
  }
  return fetch("http://localhost:5000/register", {
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(datos)
  });
}
export default Register