import { Box, useMediaQuery } from "@mui/material";
import { useSelectedPet } from "../../hooks/useSelectedPet";
import Navbar from "../../components/Navbar";
import PetWidget from "../../widgets/PetWidget";
import MyPostWidget from "../../widgets/MyPostWidget";
import PostsWidget from "../../widgets/PostsWidget";
import AdvertWidget from "../../widgets/AdvertWidget";
import FriendListWidget from "../../widgets/FriendListWidget";

export default function Feed() {
  const { selectedPet } = useSelectedPet();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

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
          <PetWidget
            petId={1}
            picturePath={
              "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
            }
          />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget
            picturePath={
              "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
            }
          />
          <PostsWidget petId={1} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget petId={"1"} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
