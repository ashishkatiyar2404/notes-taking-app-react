import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

const JWT_SECRET = process.env.REACT_APP_JWT_SECRET || "wave_note_taking_app_jwt_secret_2022";

export const requiresAuth = function (request) {
  const encodedToken = request?.requestHeaders?.authorization;
  if (!encodedToken) {
    return null;
  }
  try {
    const decodedToken = jwt_decode(
      encodedToken,
      JWT_SECRET
    );
    if (decodedToken) {
      const user = this.db.users.findBy({ email: decodedToken.email });
      return user;
    }
  } catch (err) {
    return null;
  }
  return null;
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
