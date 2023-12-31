// React y CSS
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Componentes
import Footer from './Components/Footer';
import NavbarVisible from './Components/NavbarVisible';
import NavbarNotVisible from './Components/NavbarNotVisible';

// Páginas
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Feed from './Pages/Feed';
import Jobs from './Pages/Jobs';
import Logout from './Pages/Logout';
import About from './Pages/About';
import FrequentlyAskedQuestions from './Pages/FrequentlyAskedQuestions';
import Contact from './Pages/Contact';
import Notifications from './Pages/Notifications';
import Error from './Pages/Error';
import ProfileList from './Pages/ProfileList';

// Sitio Web
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas donde la Navbar no estará visible */}
        <Route element={<NavbarNotVisible />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/error" element={<Error />} />
        </Route>
        {/* Páginas donde la Navbar estará visible */}
        <Route element={<NavbarVisible />}>
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FrequentlyAskedQuestions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profilelist" element={<ProfileList />} />
          {/* Crear páginas de perfil para otros usuarios. Por ahora solo entrega el componente Profile no acorde al usuario del Feed. */}
          <Route path="/users/:user" element={<Profile />} />
        </Route>
        {/* Redirigir todas las URL desconocidas a la página de error */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
