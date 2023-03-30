import React from 'react'
import About from "../Components/About";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Popular from "../Components/Popular";
import Recipes from "../Components/Recipes";
import PopularContext from "../context/PopularContext";
import ModalProvider from "../context/ModalContext";
import Modal from "../Components/Modal";
import SearchProvider from '../context/SearchContext';


const Home = () => {
  return (
    <PopularContext>
      <ModalProvider>
        <SearchProvider>
            <Modal/>
            <Header/>
            <About />
            <Popular />
            <Recipes />
            <Latest />
            <Footer />
        </SearchProvider>
      </ModalProvider>
    </PopularContext>
  )
}

export default Home