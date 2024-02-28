import { createContext } from "react";

const SelectedPetContext = createContext<SelectedPetContextType>(
  {} as SelectedPetContextType
);

export default SelectedPetContext;
