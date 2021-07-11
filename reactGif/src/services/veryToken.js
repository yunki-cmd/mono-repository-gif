

function VerifyToken(token) {
  const sendToken = {
    "token":token
  }
  return fetch("http://localhost:5000/login/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sendToken)
  })
}
export default VerifyToken