import './App.css';

import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


import { Home } from './components/Pages/Home';
import { Movies } from './components/Pages/Movies';
import Movie from './components/Pages/Movie';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Movies/:name' element={<Movies/>}/>
      <Route path='/search/:tipo/:name' element={<Movie/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
