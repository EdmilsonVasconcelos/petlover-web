import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { BASE_API, TOKEN } from "../../utils/api";
import PetListWidget from "../../widgets/PetListWidget";
import { useSelectedPet } from "../../hooks/useSelectedPet";
import { useNavigate } from "react-router-dom";

const ListPets = () => {
  const theme: any = useTheme();
  const { setSelectedPet } = useSelectedPet();
  const navigate = useNavigate();

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [pets, setPets] = useState<Pet[]>([] as Pet[]);

  useEffect(() => {
    const getPets = async () => {
      const response = await fetch(`${BASE_API}/pet/by-logged-user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem(TOKEN)}`,
        },
      });

      const pets: Pet[] = await response.json();

      setPets(pets);
    };

    getPets();
  }, []);

  const redirectToFeedPage = (pet: Pet) => {
    setSelectedPet(pet);
    navigate(`/feed`);
  };

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
          Meus Pets
        </Typography>
        <PetListWidget pets={pets} redirectToFeedPage={redirectToFeedPage} />
      </Box>
    </Box>
  );
};

export default ListPets;
