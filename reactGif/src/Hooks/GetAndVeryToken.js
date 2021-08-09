import { useContext, useEffect, useState } from "react";
import { Auth } from "../context/auth";
import veryToken from "../services/veryToken"


function useGetAndVeryToken() {

    const { dispatch } = useContext(Auth);
    const { auth0 } = useContext(Auth).state
    console.log(auth0)
    const [token] = useState(window.localStorage.getItem("token"));
    useEffect(() => {
        if (auth0 === false) {
            console.log(auth0)
            veryToken(token)
                .then((res) => res.json())
                .then((resp) => {
                    if (resp.status === "ok") {
                        dispatch({ type: "verify", payload: true });
                    }
                });
        }
    }, [auth0, token, dispatch]);

    return {
        auth0,
        login: () => dispatch({ type: "verify", payload: true }),
        logout: () => dispatch({ type: "verify", payload: false }),
    }
}
export default useGetAndVeryToken