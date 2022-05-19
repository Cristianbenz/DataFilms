import { createContext, useContext, useState } from "react";

const CONTEXT = createContext();

export const useLoginContext = () => useContext(CONTEXT);

export function LoginContext({ children }) {
  const [isLoged, setIsLoged] = useState(sessionStorage.getItem('isLoged'))

  const logIn = () => {
    sessionStorage.setItem('isLoged', true);
    setIsLoged(sessionStorage.getItem('isLoged'))
  };
  
  const logOut = () => {
    sessionStorage.removeItem('isLoged');
    setIsLoged(sessionStorage.getItem('isLoged'))
  }
  
  return (
    <CONTEXT.Provider
      value={{
        isLoged,
        logIn,
        logOut
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
}
