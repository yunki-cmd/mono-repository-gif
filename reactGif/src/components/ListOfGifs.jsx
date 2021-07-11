import React from "react"
import Gifs from './Gifs'

const ListOfGifs = ({ gifs } ) => {

  if ( gifs.length === 0) {
    return (
      <>
        <h1>No se ha encontrado gif</h1>
      </>
    );
  }
  return (
    <>
    {
      gifs.map((element) => {
        return (
          <Gifs key={element.id} id={element.id} title={element.title} url={element.url} />
        )
    })}
    </>
)}
export default React.memo(ListOfGifs)