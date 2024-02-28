interface TokenContextType {
  token: string | null;
  isAuthenticated?: boolean;
  setToken: (token: string | null) => void;
  updateToken?: (token: string) => void;
}

interface LoggedUserContextType {
  loggedUser: User;
  setLoggedUser: (user: User) => void;
}

interface SelectedPetContextType {
  selectedPet: Pet;
  setSelectedPet: (pet: Pet) => void;
}
