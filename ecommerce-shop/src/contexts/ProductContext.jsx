import React, {createContext, useState, useEffect} from 'react';


//creat context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const API = 'https://fakestoreapi.com/products'
  //products state
  const [products, setproducts] = useState([])
  //fetch products
  useEffect(() => {
    const fetchProducts = async () =>{
      const res = await fetch(API);
      const data = await res.json()
      setproducts(data)
      
    }

    fetchProducts()
  
  }, [])
  
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;
