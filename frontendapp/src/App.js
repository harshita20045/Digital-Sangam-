import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Help from './components/Help/Help';


function App() {
  return (
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/help' element={<Help/>}/>
      

   
    </Routes> 
  );
}

export default App;
