export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path == "/login") {
    return;
  }

  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo(`/login?redirectTo=${to.path}`);
  }

  if (user.value.role != "admin") {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }
});
