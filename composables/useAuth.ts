export const useAuth = () => {
  const user = useState<User | null>("user", () => null);

  const login = async () => {
    const { data } = await useFetch<User>("/api/login", {
      method: "POST",
      body: {
        id: "1",
        name: "Username",
        role: [],
      },
    });
    if (data) {
      user.value = data.value;
    }
  };

  const logout = async () => {
    await useFetch<User>("/api/logout", {
      method: "POST",
    });
    user.value = null;
  };

  const restore = async () => {
    const { data } = await useFetch<User>("/api/token", {
      headers: useRequestHeaders(["cookie"]),
    });
    if (data) {
      user.value = data.value;
    }
  };

  return {
    user,
    login,
    logout,
    restore,
  };
};
