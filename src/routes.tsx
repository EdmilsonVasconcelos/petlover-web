import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesApp,
} from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ListPets from "./pages/list-pets";
import ProtectedRoute from "./ProtectedRoute";
import Feed from "./pages/feed";
import MyProfile from "./pages/my-profile";

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
        <Route path="/feed" element={<ProtectedRoute element={<Feed />} />} />
        <Route
          path="/my-profile"
          element={<ProtectedRoute element={<MyProfile />} />}
        />
      </RoutesApp>
    </Router>
  );
}
