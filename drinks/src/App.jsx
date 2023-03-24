import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Latest from "./Components/Latest";
import Popular from "./Components/Popular";
import Recipes from "./Components/Recipes";
import PopularContext from "./context/PopularContext";
import ModalProvider from "./context/ModalContext";
import Modal from "./Components/Modal";


function App() {
  return (
    <PopularContext>
      <ModalProvider>
        <Modal/>
        <Header />
        <About />
        <Popular />
        <Recipes />
        <Latest />
        <Footer />
      </ModalProvider>
    </PopularContext>
  );
}

export default App;
