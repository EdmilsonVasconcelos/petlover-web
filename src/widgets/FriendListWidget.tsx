import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import WidgetWrapper from "../components/WidgetWrapper";
import Friend from "../components/Friend";

type FriendListWidgetProps = {
  pet: Pet;
};

const FriendListWidget = ({ pet }: FriendListWidgetProps) => {
  const { palette }: any = useTheme();

  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const response = await fetch(`http://localhost:3001/users/2/friends`, {
      method: "GET",
      headers: { Authorization: `Bearer ` },
    });
    const data = await response.json();
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <WidgetWrapper marginTop={2}>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Lista de amigos
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={1}
            friendId={"1"}
            name={"Tobi Vasconcelos"}
            subtitle={"Desempregado"}
            userPicturePath={
              "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
            }
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
