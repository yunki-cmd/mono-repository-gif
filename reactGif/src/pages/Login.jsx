import React, { useRef } from "react";
import { useLocation } from "wouter";
import LoginServices from "../services/login"

function Login() {
  const [, setlocation] = useLocation();

  const nick = useRef()
  const pass = useRef()
  const handlerSubmit = (e) => {
    e.preventDefault();
    const user = nick.current.value;
    const password = pass.current.value;
     LoginServices(user, password)
      .then(res => res.json())
       .then(resp => {
        console.log(resp.error);
        if (!resp.error) {
          window.localStorage.setItem("token", resp.token);
          setlocation("/")
        }
      });

  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
          <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
            <form className="w-full">
              <div className="mb-5 relative">
                <label>
                  Nombre : 
                </label>
                <input
                  ref={nick}
                  type="text"
                  id="text"
                  className="peer border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 text-center "
                  autoComplete="off"
                />
              </div>
              <div className="mb-4 relative">
                <label>
                  Password :
                </label>
                <input ref={pass}
                  type="password"
                  id="password"
                  className="peer border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent text-center"
                  placeholder="password"
                  autoComplete="off"
                />
              </div>
              <button
                onClick={handlerSubmit}
                className="w-full bg-indigo-600 text-white rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(Login);
