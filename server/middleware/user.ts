import { H3Event } from "h3";

export default defineEventHandler(
  async (event: H3Event) => {
    const user = await getToken(event);
    if (user) {
      event.context.user = user;
    }
  }
);
