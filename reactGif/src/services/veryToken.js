function VerifyToken(token) {
    const sendToken = {
        "token": token
    }
    return fetch("login/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sendToken),
    });
}
export default VerifyToken