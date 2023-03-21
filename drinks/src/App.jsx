import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Latest from "./Components/Latest";
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
      <Latest/>
      <Footer/>

  </PopularContext>

    
  
  );
}

export default App;
