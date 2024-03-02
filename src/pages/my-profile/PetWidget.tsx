import { LocationOnOutlined } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";

import { useNavigate } from "react-router-dom";
import WidgetWrapper from "../../components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";
import PetImage from "../../components/PetImage";
import { capitalizeFirstLetter } from "../../utils/utils";

type PetWidgetProps = {
  pet: Pet;
};

const PetWidget = ({ pet }: PetWidgetProps) => {
  const navigate = useNavigate();

  const { palette }: any = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  return (
    <WidgetWrapper>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/my-profile`)}
      >
        <FlexBetween gap="1rem">
          <PetImage
            image={
              pet?.petPicturePath ||
              "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
            }
          />
          <Box>
            <Typography
              variant="h4"
              color={dark}
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
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{"Brasil"}</Typography>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default PetWidget;
