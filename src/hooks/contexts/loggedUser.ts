import { createContext } from "react";

const LoggedUserContext = createContext<LoggedUserContextType>(
  {} as LoggedUserContextType
);

export default LoggedUserContext;
