import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Form = () => {
  const { palette }: any = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFormSubmit = async (values: any) => {
    console.log("Form submitted", values);
    return false;
  };

  const login = async (values: any) => {
    console.log("Login", values);
    return false;
  };

  return (
    <form>
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          error={true}
          helperText={"Email inválido"}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          error={true}
          helperText={"Password inválido"}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>

      <Box>
        <Button
          fullWidth
          type="submit"
          sx={{
            m: "2rem 0",
            p: "1rem",
            backgroundColor: palette.primary.main,
            color: palette.background.alt,
            "&:hover": { color: palette.primary.main },
          }}
        >
          LOGIN
        </Button>
        {
          <Typography
            onClick={() => console.log("Fui chamado")}
            sx={{
              textDecoration: "underline",
              color: palette.primary.main,
              "&:hover": {
                cursor: "pointer",
                color: palette.primary.light,
              },
            }}
          >
            <Link to="/signup">Não tem uma conta? Cadastre-se</Link>
          </Typography>
        }
      </Box>
    </form>
  );
};

export default Form;
