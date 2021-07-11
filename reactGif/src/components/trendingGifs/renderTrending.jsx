import TrenddingGifs from "../../Hooks/TrendingGifs";
import ListOfGifs from "../ListOfGifs";
import React  from "react"

 function TrenddingGifsRender() {
   const { gifs } = TrenddingGifs();
  return (
    <>
      <ListOfGifs gifs={gifs} />
    </>
  );
}

export default React.memo(TrenddingGifsRender);
