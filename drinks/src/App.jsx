import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ListRecipes from "./Components/ListRecipes";
import CategoriesProvider from "./context/CategoriesContext";
import ModalProvider from "./context/ModalContext";
import RecipesProvider from "./context/RecipesContext";

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListRecipes />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
