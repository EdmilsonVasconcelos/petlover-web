import { useContext } from "react";
import SelectedPetContext from "./contexts/selectedPet";

export const useSelectedPet = (): SelectedPetContextType => {
  const { selectedPet, setSelectedPet } = useContext(SelectedPetContext);

  setSelectedPet(selectedPet);

  return {
    selectedPet,
    setSelectedPet,
  };
};
