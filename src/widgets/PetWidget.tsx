import {
  ManageAccountsOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";

import { useNavigate } from "react-router-dom";
import WidgetWrapper from "../components/WidgetWrapper";
import FlexBetween from "../components/FlexBetween";
import PetImage from "../components/PetImage";
import { useSelectedPet } from "../hooks/useSelectedPet";
import { capitalizeFirstLetter } from "../utils/utils";

type PetWidgetProps = {
  pet: Pet;
};

const PetWidget = ({ pet }: PetWidgetProps) => {
  const navigate = useNavigate();

  const { palette }: any = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const { selectedPet } = useSelectedPet();

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
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
            <Typography color={medium}>{1} amigo</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{"Brasil"}</Typography>
        </Box>
        {/* <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{"location here"}</Typography>
        </Box> */}
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Quem viu meu perfil?</Typography>
          <Typography color={main} fontWeight="500">
            {"10 pessoas"}
          </Typography>
        </FlexBetween>
        {/* <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {"impressions"}
          </Typography>
        </FlexBetween> */}
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      {/* <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box> */}
    </WidgetWrapper>
  );
};

export default PetWidget;
