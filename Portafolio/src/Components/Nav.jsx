import React, { useState } from "react";
import logo from "../../src/Assets/img/logo.png";
import styles from "../CSS/nav.module.css";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const Nav = nav ? (
    <button className={styles.close} onClick={(e) => setNav(false)}>
      <img
        src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677967756/Projects/icons/x_qudf59.png"
        alt=""
      />
    </button>
  ) : (
    <button className={styles.open} onClick={(e) => setNav(true)}>
      <img
        src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677963005/Projects/icons/ordenar_lbzwyt.png"
        alt=""
      />
    </button>
  );

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <a href="">
            <img src={logo} alt="" className={styles.img} />
          </a>
        </div>
        <div className={styles.links}>
          <nav className={styles.linksN}>
            <a href="">About Me</a>
            <a href="">Resume</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </nav>
          {Nav}
        </div>
      </div>
      <nav className={nav ? styles.navOpen : styles.navClose}>
        <a href="">About Me</a>
        <a href="">Resume</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </nav>
    </>
  );
};

export default Nav;
