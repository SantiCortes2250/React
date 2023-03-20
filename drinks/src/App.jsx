import { useState } from "react";
import About from "./Components/About";
import Header from "./Components/Header";
import Popular from "./Components/Popular";
import CategoriesProvider from "./context/CategoriesContext";

import ModalProvider from "./context/ModalContext";
import RecipesProvider from "./context/RecipesContext";

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <About />
          <Popular />
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
