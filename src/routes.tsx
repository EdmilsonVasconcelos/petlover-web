import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesApp,
} from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ListPets from "./pages/list-pets";
import ProtectedRoute from "./ProtectedRoute";

export default function Routes() {
  return (
    <Router>
      <RoutesApp>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/list-pets"
          element={<ProtectedRoute element={<ListPets />} />}
        />
      </RoutesApp>
    </Router>
  );
}
