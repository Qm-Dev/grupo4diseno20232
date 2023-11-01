// React,, logos y CSS
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Componentes
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Páginas
import Profile from './Pages/Profile';
import Feed from './Pages/Feed';
import MyNetwork from './Pages/MyNetwork';
import ProfileConfiguration from './Pages/ProfileConfiguration';
import Logout from './Pages/Logout';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/configuration" element={<ProfileConfiguration />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
