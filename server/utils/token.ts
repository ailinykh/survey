import jwt from "jsonwebtoken";
import { H3Event } from "h3";

const createToken = async (user: User) => {
  const config = useRuntimeConfig();
  return await jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    config.tokenSecret,
    {
      expiresIn: config.tokenExpiration,
    }
  );
};

const verifyToken = async (token: string) => {
  try {
    const config = useRuntimeConfig();
    return await jwt.verify(token, config.tokenSecret);
  } catch (err) {
    return `${err}`;
  }
};

const getToken = (event: H3Event) => {
  const cookie = getCookie(event, "__session");
  if (!cookie) {
    return null;
  }
  const token = verifyToken(cookie);
  if (!token) {
    return null;
  }
  return token;
};

export { createToken, getToken };
