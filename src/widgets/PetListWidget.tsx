import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../components/Pet";
import WidgetWrapper from "../components/WidgetWrapper";

interface PetListProps {
  pets: Pet[];
}

const PetListWidget = ({ pets }: PetListProps) => {
  return (
    <WidgetWrapper>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {pets?.map((pet) => (
          <Friend
            key={pet.id}
            petId={1}
            name={pet.name}
            type={pet.type}
            petPicturePath={
              "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
            }
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default PetListWidget;
