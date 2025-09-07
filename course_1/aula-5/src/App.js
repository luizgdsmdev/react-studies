import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProfilePage from "./pages/profile";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
