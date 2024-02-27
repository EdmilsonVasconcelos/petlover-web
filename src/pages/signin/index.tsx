import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import useToken from "../../hooks/useToken";

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
          PetLover
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
          Bem vindo ao PetLover, aqui somos loucos por pets! =)
        </Typography>
        <Form updateToken={updateToken!} />
      </Box>
    </Box>
  );
}
