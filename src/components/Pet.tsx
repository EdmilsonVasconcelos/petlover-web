import { ArrowCircleRight } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import UserImage from "./PetImage";
import { capitalizeFirstLetter } from "../utils/utils";

type PetProps = {
  pet: Pet;
  redirectToFeedPage: (pet: Pet) => void;
};

const Pet = ({ pet, redirectToFeedPage }: PetProps) => {
  const { palette }: any = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage
          image={"https://cdn-icons-png.flaticon.com/512/2919/2919906.png"}
          size="55px"
        />
        <Box onClick={() => redirectToFeedPage(pet)}>
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {capitalizeFirstLetter(pet.name)}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {capitalizeFirstLetter(pet.type)}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => redirectToFeedPage(pet)}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        <ArrowCircleRight sx={{ color: primaryDark }} />
      </IconButton>
    </FlexBetween>
  );
};

export default Pet;
