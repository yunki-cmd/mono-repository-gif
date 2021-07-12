import { Link, useLocation } from "wouter";
import React, { useRef } from "react";
import "./menu.css";

function Menu() {
  const log = useRef();

  const [, setlocation] = useLocation();
  const handlerLogin = (event) => {
    const redir =  event.target.textContent
    if (redir === "Login") {
      setlocation("/login");
    } else {
      setlocation("/register");
    }
  };
  /*const handlerAnimateOut = () => {
    const span = log.current;
    if (!span.classList.contains("out")) {
      span.classList.add("out");
    } else {
      span.classList.remove("out");
    }
  }; */
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
              onClick={handlerLogin}
              ref={log}
              className="cursor-pointer m-1 p-1 text-center   border-2 border-white-200 rounded hover:text-red-400 "
            >
              Login
            </span>
            <span
              onClick={handlerLogin}
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

export default React.memo(Menu);
