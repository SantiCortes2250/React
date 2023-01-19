import './App.css';

import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


import { Home } from './components/Pages/Home';
import { Movies } from './components/Pages/Movies';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Movies/:nombre' element={<Movies/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
