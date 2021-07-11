import React, { useState } from "react";

const Context = React.createContext({ title: "null", url: "null" });

export function TrenddingGifsContext({ children }) {
  const [gifs, setGifs] = useState([]);
  return (
    <Context.Provider value={{ gifs, setGifs }}>
      {children}
    </Context.Provider>
  );
}
export { Context };
