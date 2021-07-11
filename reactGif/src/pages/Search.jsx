
import ListOfGifs from "../components/ListOfGifs"
import useGifs from '../Hooks/useGifs'
import Buscador from "../components/Buscador/buscador"
import lazytrendy from "../Hooks/lazytrendy"
import { debounce } from "debounce"
import "./Home.css";
import { useCallback, useEffect, useRef } from "react";
import Spinner from "../components/spinner/spinner"

const Search = ({ params }={keyword : ""}) => {
  const { keyword } = params
  const { gif, loading, setPage } = useGifs({ keyword })
  const divisor =  useRef()  
  const { show } = lazytrendy({ divisor: loading ? null : divisor })

   /*  const handlerNextPage = () => {
        setPage(previpage => previpage+1)
    } */

  const handlerNextPage = useCallback(debounce(
   ()=> setPage((previpage) => previpage + 1),1000
  ),[setPage]) 

  useEffect(() => {
    if (show) handlerNextPage();
  }, [handlerNextPage, show]);

    return (
      <>
        <Buscador />
        {loading ? (
          <Spinner />
        ) : (
          <section className="ListGIfs">
            <ListOfGifs gifs={gif} />
          </section>
        )}
        <div ref= {divisor} ></div>
        {/* <button onClick={handlerNextPage}> Siguiente pagina</button> */}
      </>
    );    
}
export default Search