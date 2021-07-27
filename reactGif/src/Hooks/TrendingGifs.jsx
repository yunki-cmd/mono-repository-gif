import { useEffect, useContext } from "react";
import GetTrendig from '../services/GetTrending'
import { Context } from "../context/TrenddingContext";

const SetTrendingGifs = () => {

  const { gifs, setGifs } = useContext(Context);
  
  useEffect(() => {
     GetTrendig()
       .then((result) => result.json())
       .then((dato) => {
         const data = dato.data;
         console.log(data)
         const gif = data.map((element) => {
           return {
             title: element.title,
             url: element.images.original.url,
             id: element.id,
           };
         });
         setGifs(gif);
       });
   }, [setGifs]);
  return { gifs };
}
export default SetTrendingGifs