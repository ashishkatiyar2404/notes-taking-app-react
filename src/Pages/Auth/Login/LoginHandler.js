import axios from "axios";

const LoginHandler = async (authDispatch, from, navigate, loginInfo, e, fetchAllData) => {
  if (e) e.preventDefault();
  try {
    const response = await axios.post("/api/auth/login", {
      ...loginInfo,
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
    console.error("Login Error:", error);
    alert("Login failed. Please check your credentials and try again.");
  }
};

export { LoginHandler };
