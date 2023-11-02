// React, logos y CSS
import { BrowserRouter , Route, Routes, useLocation} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Componentes
import Footer from './Components/Footer';
import NavbarVisible from './Components/NavbarVisible';
import NavbarNotVisible from './Components/NavbarNotVisible';

// Páginas
import Login from './Pages/Login'
import Profile from './Pages/Profile';
import Feed from './Pages/Feed';
import MyNetwork from './Pages/MyNetwork';
import ProfileConfiguration from './Pages/ProfileConfiguration';
import Logout from './Pages/Logout';
import About from './Pages/About';
import FrequentlyAskedQuestions from './Pages/FrequentlyAskedQuestions';
import Contact from './Pages/Contact';
import Notifications from './Pages/Notifications';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Sitio Web
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas donde la Navbar no será visible al usuario */}
        <Route element={<NavbarNotVisible />}>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        {/* Páginas donde la Navbar será visible al usuario */}
        <Route element={<NavbarVisible />}>
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/configuration" element={<ProfileConfiguration />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FrequentlyAskedQuestions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
