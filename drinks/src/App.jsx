import About from "./Components/About";
import Header from "./Components/Header";
import Popular from "./Components/Popular";
import Recipes from "./Components/Recipes";
import PopularContext from "./context/PopularContext";






function App() {
  return (
    <PopularContext>
     
      <Header />
      <About />
      <Popular />
      <Recipes/>
        
 

    </PopularContext>

     
       
   
  
  );
}

export default App;
