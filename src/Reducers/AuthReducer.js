const getSavedUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
};

const savedToken = localStorage.getItem("token");
const savedUser = getSavedUser();

export const initialState = {
  token: savedToken || null,
  IsLoggedIn: !!savedToken,
  ...(savedUser || {}),
};

function AuthReducer(authState, authAction) {
  switch (authAction.type) {
    case "LOGIN": {
      const user = authAction.payload.foundUser || {};
      const token = authAction.payload.encodedToken || localStorage.getItem("token");
      try {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.error(e);
      }
      return {
        ...authState,
        ...user,
        IsLoggedIn: true,
        token,
      };
    }

    case "LOGOUT": {
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } catch (e) {
        console.error(e);
      }
      return {
        token: null,
        IsLoggedIn: false,
      };
    }

    case "LOGIN_PERSIST":
      return {
        ...authState,
        IsLoggedIn: true,
      };

    case "SIGN_UP": {
      const user = authAction.payload.createdUser || {};
      const token = authAction.payload.encodedToken || localStorage.getItem("token");
      try {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.error(e);
      }
      return {
        ...authState,
        ...user,
        IsLoggedIn: true,
        token,
      };
    }

    default:
      return authState;
  }
}

export default AuthReducer;
