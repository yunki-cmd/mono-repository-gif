import React,{ useEffect, useState } from "react";
import { useLocation } from "wouter";
import Categoria from "../../services/category"

function Category() {

  
  const [data,setdata] = useState([])
  useEffect(() => {
    async function datas() {
      const datos = await Categoria()
      setdata(datos)
    }
    datas()
    return (() => {
      console.log("clear")
    })
  }, []);

  const [,setSubcategory] = useLocation()
  const handlerclick = (event) => {
    const queryli = event.target.querySelectorAll("li");
    queryli.forEach((element) => {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  }
  const handlerSearch = (event)=>{
    const search = event.target.textContent
    setSubcategory(`/search/${search}`)
  }
  if (data === undefined) return (<><div>loading</div></>)
  return (
    <>
      <div className="text-center">
        <nav className="bg-gray-200">
          {data.map(cate => {
            const cateName = cate.name
            const subcategory = cate.subcategories
            return (
              <ul key={cateName} onClick={handlerclick} className="text-xl font-mono uppercase border-2 bg-gray-400 odd:bg-green-400 even:bg-purple-400">
                {cateName}
                {subcategory.map(x => {
                  return (
                    <li
                      key={x.name+Math.random()+1}
                      onClick={handlerSearch}
                      className="text-lg  p-1 hidden bg-green-50 even:bg-yellow-300"
                    >
                      {x.name}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </nav>
      </div>
    </>
  );  

}

export default React.memo(Category)