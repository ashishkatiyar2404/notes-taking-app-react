// LOGIN HANDLER
import axios from "axios";

const GuestLoginHandler = (navigate, authDispatch, guestLogin, e) => {
  e.preventDefault();

  console.log("auto sign hogya ji");
  (async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        ...guestLogin,
      });
      console.log(response, "pass hogye bhaiya");
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: response.data });
        navigate("/Home");
        console.log("humse panga");
      }
    } catch (error) {
      console.log("Error Wala Masla Hogya Ji", error);
    }
  })();
};
export { GuestLoginHandler };
