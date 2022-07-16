import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "../Reducers/AuthReducer";

const initialState = {
  token: null,
  IsLoggedIn: false,
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    function oneTime(authDispatch) {
      console.log("I am here in USEEFFECT");
      if (localStorage.getItem("token" !== null)) {
        console.log("Login is continuing");
        return authDispatch({ type: "LOGIN_PERSIST" });
      } else {
        console.log("Masla hgya ji USEEFFECT");
      }
    }
    oneTime(authDispatch);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
