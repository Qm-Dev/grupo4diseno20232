import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';



function App() {
  return (
    <div className="App">
      <Navbar />
      <body>
      <MainSection />
      </body>
      <Footer />
    </div>
  );
}

export default App;
