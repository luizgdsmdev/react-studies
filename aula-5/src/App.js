import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import ProfilePage from './pages/profile'

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
