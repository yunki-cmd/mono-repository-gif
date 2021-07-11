import { useState, useEffect, useContext } from 'react'
import GetGifs from '../services/GetGifs'
import { Contexto } from "../context/GifsContext";

const Initial_Page = 0

const useGifs = ({ keyword }= {keyword:"error"} ) => {
  
  const [loading, setloanding] = useState(true)
  const [loadingNextPage, setloandingNextPage] = useState(true);
  const [page,setPage] = useState(Initial_Page)
  const { gif, setGifs } = useContext(Contexto)
  const keywordtosearch = keyword 
  useEffect(() => {
    if (keywordtosearch !== null || keywordtosearch !== "null") {
      GetGifs(keywordtosearch).then((response) => {
        setGifs(response);
        setloanding(false);
        localStorage.setItem("lastsearch", keyword);
      });
    } else {
      localStorage.setItem("lastsearch", "");
      
    }
  }, [keywordtosearch, setGifs, keyword]);
  
  useEffect(() => {
    if (page === Initial_Page) return;
    GetGifs(keywordtosearch, page).then((nextGifs) => {
      setGifs((previoGifs) => previoGifs.concat(nextGifs));
      setloandingNextPage(false);
    });

  }, [page, keywordtosearch, setGifs]);

  if (keyword === "") return ({})

  return { gif,loading, setPage, loadingNextPage };
}

export default useGifs