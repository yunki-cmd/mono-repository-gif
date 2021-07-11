

function Login(user, password) {
  const sendLog = {
    "user": user,
    "password":password
  }

  return fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendLog),
  })
}
export default Login