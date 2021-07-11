import { useContext, useEffect, useState } from "react";
import { Auth } from "../context/auth";
import veryToken from "../services/veryToken"


function GetAndVeryToken() {

   const { auth0, setauth0 } = useContext(Auth);
   const [token] = useState(window.localStorage.getItem("token"));
   useEffect(() => {
     if (auth0 === false) {
       veryToken(token)
         .then((res) => res.json())
         .then((resp) => {
           if (resp.status === "ok") {
             setauth0(true);
           }
         });
     }
   }, [auth0, token, setauth0]);
  
  return { auth0 };
}
export default GetAndVeryToken;