/*
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

 
  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        
        setUpRecaptha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
*/