import React, {useState} from "react";
import styles from "../CSS/nav.module.css";


const Nav = () => {

  const [search, setsearch] = useState('')


  const HandleChange = (e) =>{
    setsearch(e.target.value)

  }



 const HandleSubmit = (e) =>{
  e.preventDefault()

  if(search.trim === ''){
    return;
  }

  
  


  

 }
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679286372/Projects/Logos/stailr_axgsr7.png"
          alt=""
        />
      </div>

        <form  
        onSubmit={HandleSubmit}
        className={styles.inputForm}>
          <button className={styles.icon}>
            <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679286464/Projects/icons/buscar_j99lxe.png" alt="" />
          </button>
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
