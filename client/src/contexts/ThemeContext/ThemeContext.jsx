import { createContext, useContext } from "react";

const ThemeContext = createContext();

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default useThemeContext;
export { ThemeContext };
