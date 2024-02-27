import { useMemo, useState } from "react";
import Routes from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import TokenContext from "./hooks/contexts/token";
import { TOKEN } from "./utils/api";
import LoggedUserContext from "./hooks/contexts/loggedUser";

function App() {
  const mode = "dark";
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [token, setToken] = useState(sessionStorage.getItem(TOKEN));
  const [loggedUser, setLoggedUser] = useState({} as User);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </LoggedUserContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
