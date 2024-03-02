import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import useToken from "../../hooks/useToken";
import { Link } from "react-router-dom";

export default function Signin() {
  const theme: any = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { updateToken } = useToken();

  return (
    <Box>
      <Box
        width="100%"
        bgcolor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            PetLover
          </Link>
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        bgcolor={theme.palette.background?.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          LOGIN
        </Typography>
        <Form updateToken={updateToken!} />
      </Box>
    </Box>
  );
}
