import { useContext } from "react";
import LoggedUserContext from "./contexts/loggedUser";

export const useLoggedUser = (): LoggedUserContextType => {
  const { loggedUser, setLoggedUser } = useContext(LoggedUserContext);

  setLoggedUser(loggedUser);

  return {
    loggedUser,
    setLoggedUser,
  };
};
