// LOGIN HANDLER
import axios from "axios";

const GuestLoginHandler = (navigate, authDispatch, guestLogin, e) => {
  e.preventDefault();

  (async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        ...guestLogin,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: response.data });
        navigate("/Home");
      }
    } catch (error) {
      console.log("Error Wala Masla Hogya Ji", error);
    }
  })();
};
export { GuestLoginHandler };
