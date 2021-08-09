import React, { useReducer,  } from "react";

const Auth = React.createContext();

export function Authe({ children }) {

  const reducer = (state,action) => {
    if (action.type === "verify") {
      return {
        ...state,
        auth0 : action.payload
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    auth0:false
  }
  );

  return <Auth.Provider value={{ state , dispatch }}>
    {children}
  </Auth.Provider>;
}

export { Auth };
