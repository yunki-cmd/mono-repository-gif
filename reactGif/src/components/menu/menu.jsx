import { Link, useLocation } from "wouter";
import React, {  useContext, useRef } from "react";
import "./menu.css";
import useGetAndVeryToken  from "../../Hooks/GetAndVeryToken"
import {Auth} from "../../context/auth"

function Menu() {
  const log = useRef();
  const{auth0} = useContext(Auth).state
  console.log(auth0);
  const {logout} = useGetAndVeryToken()
  const [, setlocation] = useLocation();

  const hadnlerLogin = (event) => {
      const redir = event.target.textContent;
      console.log(redir);
      if (redir === "Login") {
        setlocation("/login");
      } else if (redir === "Register") {
        setlocation("/register");
      } else if (redir === "LogOut") {
        window.localStorage.removeItem("token");
        logout()
        setlocation("/login")
      }
  }

  
  if (auth0) {
    return (
      <>
        <nav className="w-full h-20">
          <div className="h-full flex flex-row justify-between content-center items-center md:justify-evenly">
            <span className="ml-2 text text-purple-600 text-4xl">Giffy</span>
            <h1>
              <Link to="/">Home</Link>
            </h1>
            <div className="flex flex-row ">
              <span
                onClick={hadnlerLogin}
                className="cursor-pointer m-1 p-1 text-center   border-2 border-white-200 rounded hover:text-red-400 "
              >
                LogOut
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="w-full h-20">
          <div className="h-full flex flex-row justify-between content-center items-center md:justify-evenly">
            <span className="ml-2 text text-purple-600 text-4xl">Giffy</span>
            <h1>
              <Link to="/">Home</Link>
            </h1>

            <div className="flex flex-row ">
              <span
                onClick={hadnlerLogin}
                ref={log}
                className="cursor-pointer m-1 p-1 text-center   border-2 border-white-200 rounded hover:text-red-400 "
              >
                Login
              </span>
              <span
                onClick={hadnlerLogin}
                className="cursor-pointer m-1 p-1 text-center   border-2 border-white-200 rounded hover:text-red-400"
              >
                Register
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default React.memo(Menu);

/*const handlerAnimateOut = () => {
    const span = log.current;
    if (!span.classList.contains("out")) {
      span.classList.add("out");
    } else {
      span.classList.remove("out");
    }
  }; */

  /*   const handlerLogin = (event) => {
    const redir = event.target.textContent
    console.log(redir);
    if (redir === "Login") {
      setlocation("/login");
    } else if (redir === "Register") {
      setlocation("/register");
    } else if (redir === "LogOut"){
      setauth0(false)
      window.localStorage.removeItem("token")
    }
  }; */