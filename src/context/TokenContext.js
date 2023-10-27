import React, { createContext, useState, useEffect } from "react";

const TOKEN_KEY = 'token';

export const TokenContext = createContext();

 const TokenProvider = (props) => { 

    const [token, setToken] = useState();

    const loadToken = async () => {
      let tokenStored = localStorage.getItem(TOKEN_KEY);
      if(tokenStored){
        setToken(tokenStored);
      }
    }

    const createToken = async (tokenToStore) => {
      localStorage.setItem(TOKEN_KEY, tokenToStore);
      setToken(tokenToStore);
    }

    useEffect(() => {
      loadToken();
    }, []);
    
    return (
        <TokenContext.Provider
          value={{
            token,
            createToken
          }}
        >
          {props.children}
        </TokenContext.Provider>
      );


}

export default TokenProvider;