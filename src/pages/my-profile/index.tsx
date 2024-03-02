import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useSelectedPet } from "../../hooks/useSelectedPet";
import PetWidget from "./PetWidget";
import { capitalizeFirstLetter } from "../../utils/utils";
import FriendsWidget from "./FriendsWidget";

const MyProfile = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { selectedPet } = useSelectedPet();

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <PetWidget pet={selectedPet} />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <WidgetWrapper>
            <Typography variant="h1">
              {capitalizeFirstLetter(selectedPet.name)}
            </Typography>
            <Typography variant="h4" marginTop={2}>
              Nascido em: {selectedPet.birthDate}
            </Typography>
            <Typography variant="h4" marginTop={2}>
              Eu sou um: {selectedPet.type}
            </Typography>
          </WidgetWrapper>
        </Box>

        <Box flexBasis="26%">
          <FriendsWidget pet={selectedPet} />
        </Box>
      </Box>
    </Box>
  );
};

export default MyProfile;
