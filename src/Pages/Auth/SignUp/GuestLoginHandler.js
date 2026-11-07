import axios from "axios";

const GuestLoginHandler = async (navigate, authDispatch, guestLogin, e, from, fetchAllData) => {
  if (e) e.preventDefault();
  try {
    const response = await axios.post("/api/auth/login", {
      ...guestLogin,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({ type: "LOGIN", payload: response.data });
      if (fetchAllData) {
        fetchAllData();
      }
      navigate(from || "/Home", { replace: true });
    }
  } catch (error) {
    console.error("Guest Login Error:", error);
    alert("Guest login failed. Please try again.");
  }
};

export { GuestLoginHandler };
