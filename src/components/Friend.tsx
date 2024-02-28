import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import PetImage from "./PetImage";

type FriendProps = {
  friendId: string;
  name: string;
  subtitle: string;
  userPicturePath: string;
};

const Friend = ({ friendId, name, subtitle, userPicturePath }: FriendProps) => {
  const navigate = useNavigate();

  const { palette }: any = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = true;

  const patchFriend = async () => {
    const response = await fetch(`http://localhost:3001/users/1/1`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer `,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <PetImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
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
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
