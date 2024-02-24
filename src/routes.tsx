import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesApp,
} from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import ListPets from "./dashboard/list-pets";

export default function Routes() {
  return (
    <Router>
      <RoutesApp>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list-pets" element={<ListPets />} />
      </RoutesApp>
    </Router>
  );
}
