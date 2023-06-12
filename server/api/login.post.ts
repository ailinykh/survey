import { H3Event } from "h3";

export default defineEventHandler(
  async (event: H3Event) => {
    const user = await readBody(event);
    const token = await createToken(user);
    setCookie(event, "__session", token);
    return user;
  }
);
