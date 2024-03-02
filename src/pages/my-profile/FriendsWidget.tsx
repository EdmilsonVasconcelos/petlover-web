import { LocationOnOutlined } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";

import { useNavigate } from "react-router-dom";
import WidgetWrapper from "../../components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";
import { capitalizeFirstLetter } from "../../utils/utils";

type PetWidgetProps = {
  pet: Pet;
};

const FriendsWidget = ({ pet }: PetWidgetProps) => {
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
              Meus amigos
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <Typography color={medium}>Meus amigos aqui</Typography>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default FriendsWidget;
