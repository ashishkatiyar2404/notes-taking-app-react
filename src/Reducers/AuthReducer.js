const initialState = {
  token: null,
  IsLoggedIn: false,
};

function AuthReducer(authState, authAction) {
  switch (authAction.type) {
    case "LOGIN":
      return {
        ...authState,
        ...authAction.payload.foundUser,
        IsLoggedIn: true,
        token: localStorage.getItem("token"),
      };

    case "LOGOUT":
      return {
        ...initialState,
      };

    case "LOGIN_PERSIST":
    case "GUEST_LOGIN":
      return {
        ...authState,
        IsLoggedIn: true,
      };

    case "SIGN_UP":
      return {
        ...authState,
        ...authAction.payload.createdUser,
        token: localStorage.getItem("token"),
      };

    default:
      return {
        ...authState,
      };
  }
}

export default AuthReducer;
