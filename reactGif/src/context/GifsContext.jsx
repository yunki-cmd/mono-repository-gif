import React, {useState} from 'react'

const Contexto = React.createContext()

export function GifsContextProvider ({children}) {
  const [gif, setGifs] = useState([])

    return <Contexto.Provider value={{ gif, setGifs }}>
    {children}
  </Contexto.Provider>
}

export {Contexto}