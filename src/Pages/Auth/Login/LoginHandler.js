// LOGIN HANDLER
import axios from "axios";

const LoginHandler = (authDispatch, from, navigate, loginInfo, e) => {
  e.preventDefault();
  (async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        ...loginInfo,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: response.data });

        // navigate(from, { replace: true });
        // THE ABOVE LINE IS NOTE WORKING CHECK LATER WHY
        navigate("/Home");
      }
    } catch (error) {
      console.log("Error Wala Masla Hogya Ji", error);
    }
  })();
};
export { LoginHandler };
