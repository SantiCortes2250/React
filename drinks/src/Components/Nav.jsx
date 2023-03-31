import React, {useState} from "react";
import styles from "../CSS/nav.module.css";
import { NavLink } from 'react-router-dom';




const Nav = () => {

  const [search, setSearch] = useState('')
  const [searchDrink, setSearchDrink] = useState(false)
  



  const HandleChange = (e) =>{
    setSearch(e.target.value)

    if(search.trim() === ''){
      setSearchDrink(false)
      return;
  
    }
    setSearchDrink(true)

  }



 const HandleSubmit = (e) =>{
  e.preventDefault()
 }
  
  return (
    <div className={styles.container}>
      <NavLink to={'/'}>
      <div className={styles.logo}>
        <img
          src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679286372/Projects/Logos/stailr_axgsr7.png"
          alt=""
        />
      </div>


      </NavLink>
     
        <form  
        onSubmit={HandleSubmit}
        className={styles.inputForm}>
         
          {searchDrink ? <NavLink to={'/Search/' + search}><button className={styles.icon}>
            <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679286464/Projects/icons/buscar_j99lxe.png" alt="" />
          </button></NavLink> : <button className={styles.icon}>
            <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679286464/Projects/icons/buscar_j99lxe.png" alt="" />
          </button>}
          

          
         
          <input 
          onChange={HandleChange}
          autoComplete="off"
          placeholder="Search..." 
          className={styles.input} 
          name="name" 
          type="text" />
     
       
      </form>
      </div>
 
  );
};

export default Nav;
