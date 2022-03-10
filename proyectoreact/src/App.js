
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'

import { Home } from './components/pages/Home/Home';
import {AboutUs} from './components/pages/AboutUs/AboutUs'
import { Contact } from './components/pages/Contact/Contact';
import { Counter } from './components/pages/Counter/Counter';
import { Counterimage } from './components/pages/Counterimage/Counterimage';
import { Cards } from './components/pages/Cards/Cards';
import { SignUp } from './components/pages/SignUp/SignUp'
import { Contactanos } from './components/pages/Contactanos/Contactanos';





 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path = "/AboutUs" element = {<AboutUs />} />
        <Route path= "/Contact" element = {<Contact />} />
        <Route path="/Counter" element = {<Counter/>}/>
        <Route path="/Counterimage" element = {<Counterimage/>}/>
        <Route path='/Cards' element = {<Cards/>}/>
        <Route path='/SignUp' element = {<SignUp/>}/>
        <Route path='/Contactanos' element = {<Contactanos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
