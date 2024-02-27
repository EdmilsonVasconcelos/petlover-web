import { ArrowCircleRight } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { capitalizeFirstLetter } from "../utils/api";

type PetProps = {
  petId: number;
  name: string;
  type: string;
  petPicturePath: string;
};

const Pet = ({ petId, name, type, petPicturePath }: PetProps) => {
  const navigate = useNavigate();

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
        <Box
          onClick={() => {
            console.log("oioioii");
          }}
        >
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
            {capitalizeFirstLetter(name)}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {capitalizeFirstLetter(type)}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => {
          console.log("auhauha");
        }}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        <ArrowCircleRight sx={{ color: primaryDark }} />
      </IconButton>
    </FlexBetween>
  );
};

export default Pet;
