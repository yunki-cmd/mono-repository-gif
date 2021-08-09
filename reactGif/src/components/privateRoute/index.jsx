
import { Redirect, Route, } from "wouter";
import GetAndVeryToken from "../../Hooks/GetAndVeryToken"


function PrivateRoute({ component, path }) {
  const { auth0 }  = GetAndVeryToken()
  console.log(auth0);
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