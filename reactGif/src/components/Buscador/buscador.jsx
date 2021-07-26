import { useLocation } from "wouter";
import React,{ useState  } from "react";

const Buscador = () => {
  const [keyword, setKeyword] = useState(localStorage.getItem("lastsearch")||"");
  const [,setSearchGifs] = useLocation();

  
  const handlerInput = (e) => {
    const key = e.target.value
    if (key.length !== 0) {
        setKeyword(key);
    } else {
      setKeyword("no has teclado ninguna palabra")
    }
  };

    const handlerClickSearch = (e) => {
      e.preventDefault();
      setSearchGifs(`/search/${keyword}`);
  };
  return (
    <>
      <div className="bg-indigo-dark h-50 p-6 w-full">
        <div className="container mx-auto text-center w-full">
          <input
            onChange={handlerInput}
            type="search"
            className="w-2/3 h-16 sm:w-80 xl:w-5/6  rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg text sm:text-center"
            placeholder="What are you looking for?"
          />
          <button
            type="submit"
            className="w-1/3 sm:w-20 xl:w-1/6 h-16 "
            onClick={handlerClickSearch}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default React.memo(Buscador);
