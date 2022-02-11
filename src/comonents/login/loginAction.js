export const loginUser = (id, pwd) => {
  return {
    type: "LOGIN_USER",
    payload: { id, pwd },
  };
};
