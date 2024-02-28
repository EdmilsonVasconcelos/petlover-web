import { Box } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";
import Pet from "../components/Pet";

interface PetListProps {
  pets: Pet[];
  redirectToFeedPage: (pet: Pet) => void;
}

const PetListWidget = ({ pets, redirectToFeedPage }: PetListProps) => {
  return (
    <WidgetWrapper>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {pets?.map((pet) => (
          <Pet pet={pet} key={pet.id} redirectToFeedPage={redirectToFeedPage} />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default PetListWidget;
