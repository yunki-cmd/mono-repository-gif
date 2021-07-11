import { Link } from 'wouter'
import React from "react"
import "./gifs.css"


function Gifs({ title, url, id }) {


  
     return (
       <>
         <div className="card_div border-8 border-transparent rounded hover:bg-gray-200 hover:border-purple-200">
           <h3 className="text text-center text-xl p-1">{title}</h3>
           <Link href={`/details/${id}`}>
             <img
               src={url}
               alt={title}
               className="cursor-pointer rounded object-cover"
             ></img>
           </Link>
         </div>
       </>
     );
}
export default React.memo(Gifs)