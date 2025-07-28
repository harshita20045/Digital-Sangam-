import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Help from './components/Help/Help';
import Contact from './components/Contact/Contact';

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/help" element={<Help />} />
    <Route path="/contact" element={<Contact />} />
   
  </Routes>
  </>
}

export default App;
