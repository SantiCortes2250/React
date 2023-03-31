import React from "react";
import Drinks from "../Components/Drinks";
import SearchProvider from "../context/SearchContext";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import ModalProvider from "../context/ModalContext";
import Modal from "../Components/Modal";


const Search = () => {
  return (
    <>
      <SearchProvider>
        <ModalProvider>
          <Modal/>
          <Nav />
          <Drinks />
          <Footer />
        </ModalProvider>
      </SearchProvider>
    </>
  );
};

export default Search;
