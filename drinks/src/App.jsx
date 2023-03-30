
import Search from "./Pages/Search"
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Pages/Home";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Search/:name" element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
