import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
