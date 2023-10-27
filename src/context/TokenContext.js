import React, { createContext, useEffect, useState } from "react";


export const TokenContext = createContext();

 const TokenProvider = (props) => { 

    const [token, setToken] = useState([]);


    const TokenSetter = (param) => {

        setToken(param)


    }
    return (
        <TokenProvider.Provider
          value={{
            token,
            TokenSetter

          }}
        >
          {props.children}
        </TokenProvider.Provider>
      );


}

export default TokenProvider;