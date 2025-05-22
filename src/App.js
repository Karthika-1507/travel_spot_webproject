import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Holidays from './pages/Holidays/Holidays';
import CityBreaks from './pages/Citybreaks/Citybreaks';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" style={{ paddingTop: '70px' }}>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city-breaks' element={<CityBreaks />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/destinations' element={<Destinations />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
