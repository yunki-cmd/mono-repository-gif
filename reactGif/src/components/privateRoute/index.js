import { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "wouter";
import {Auth} from "../../context/auth"
import  GetAndVerifyToken from "../../Hooks/GetAndVeryToken"
import veryToken from "../../services/veryToken";

function PrivateRoute({ component, path }) {
  const { auth0 } = useContext(Auth);
  console.log(auth0)
  return (
    <>
      {auth0 ? (
        <Route component={component} path={path}></Route>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
    </>
  );
}
export default PrivateRoute