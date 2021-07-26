import React, { useRef } from "react"
import {useLocation} from "wouter"
import serverRegister from "../services/registerUser"

function Register() {
    const [, setlocation] = useLocation()

    const nombre = useRef()
    const email = useRef()
    const password = useRef()
    const passwordValidator = useRef()

    const handlerRegister = (event) => {
        event.preventDefault()
        
        if (password.current.value === passwordValidator.current.value) {
            serverRegister({
              nombre: nombre.current.value,
              email: email.current.value,
                password: password.current.value
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.user) {
                        setlocation("/login")
                    } // funciona
                })
        } else {
            console.err("error password")
        }

    }


  return (
<div className="font-sans">
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Registrate
                </label>
                <form method="#" action="#" className="mt-10">
                                    
                    <div>
                        <input ref={nombre} type="text" placeholder="Nombres" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                    </div>
                    <div className="mt-7">                
                        <input type="email" ref={email} placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    <div className="mt-7">                
                        <input type="password" ref={password} placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    <div className="mt-7">                
                        <input type="password" ref={passwordValidator} placeholder="Confirmar contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    
        
                    <div className="mt-7">
                        <button onClick={handlerRegister} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Registrar
                        </button>
                    </div>
        
                    <div className="flex mt-7 items-center text-center">

                        <label className="block font-medium text-sm text-gray-600 w-full">
                            Registrate con
                        </label>
                       
                    </div>
        
                    <div className="flex mt-7 justify-center w-full">
                        <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            
                            Facebook
                        </button>
        
                        <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            
                            Google
                        </button>
                    </div>
        
                    <div className="mt-7">
                        <div className="flex justify-center items-center">
                            <label className="mr-2" >¿Ya tienes una cuenta?</label>
                            <a onClick={()=>{setlocation("/login")}} className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105  cursor-pointer">
                                Iniciar sesion
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
                </div>
                )

}

export default React.memo(Register)