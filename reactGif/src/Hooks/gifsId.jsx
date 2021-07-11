import { useEffect, useState } from "react"
import getGifsbyId from "../services/getGifsbyId"


function GetGifsId({ id } ) {

  const [gif, setGif] = useState([])

  useEffect(() => {
    getGifsbyId({ id } )
      .then(resp => resp.json())
      .then(datos => {
        const title = datos.data.title;
        const id = datos.data.id;
        const url = datos.data.images.original.url
        setGif({title:title,id:id,url:url})
      })
  },[id])
  return {gif}
}
export default GetGifsId