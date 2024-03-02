import { useMemo, useState } from "react";
import Routes from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import TokenContext from "./hooks/contexts/token";
import { TOKEN } from "./utils/api";
import LoggedUserContext from "./hooks/contexts/loggedUser";
import SelectedPetContext from "./hooks/contexts/selectedPet";

function App() {
  const mode = "dark";
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [token, setToken] = useState(sessionStorage.getItem(TOKEN));
  const [loggedUser, setLoggedUser] = useState({} as User);
  const [selectedPet, setSelectedPet] = useState({} as Pet);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <SelectedPetContext.Provider value={{ selectedPet, setSelectedPet }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </SelectedPetContext.Provider>
      </LoggedUserContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
