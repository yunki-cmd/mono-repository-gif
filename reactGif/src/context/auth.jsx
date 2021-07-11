import React, { useState } from "react";

const Auth = React.createContext();

export function Authe({ children }) {
  const [auth0, setauth0] = useState(false);

  return <Auth.Provider value={{ auth0, setauth0 }}>
    {children}
  </Auth.Provider>;
}

export { Auth };
