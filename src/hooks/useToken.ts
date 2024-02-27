import { useContext } from "react";
import TokenContext from "./contexts/token";
import { TOKEN } from "../utils/api";

const useToken = (): TokenContextType => {
  const { token, setToken } = useContext(TokenContext);

  const updateToken = (token: string) => {
    localStorage.setItem(TOKEN, token);
    setToken(token);
  };

  return {
    isAuthenticated: !!token,
    token,
    setToken,
    updateToken,
  };
};

export default useToken;
