import {useContext} from 'react'
import { Contexto } from "../context/GifsContext"

 function useGlobalGifs() {
     const { gif } = useContext(Contexto)
        return gif
}
export default useGlobalGifs