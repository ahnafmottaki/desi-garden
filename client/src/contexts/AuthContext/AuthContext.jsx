import { createContext, useContext } from "react";

const AuthContext = createContext({
  user: {},
  loading: false,
  createUser() {},
  updateUser() {},
  logOut() {},
  signInWithGoogle() {},
  signInUser() {},
  setUser() {},
});

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
export { AuthContext };
