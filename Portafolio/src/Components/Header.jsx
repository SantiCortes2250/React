import React from "react";
import Nav from "./Nav";
import styles from "../CSS/header.module.css";
import Typewriter from "typewriter-effect";
import image from '../Assets/img/header.png'

export const Header = () => {
  return (
    <>
      <Nav />
        <div className={styles.container}>
          <div className={styles.info}>
            <p>Hi There!</p>
            <div className={styles.writer}>
            I am
            <Typewriter
                  options={{
                    strings: [
                      "Santi Rincon",
                      "Developer",
                      "Freelancer"
                    ],
                    autoStart: true,
                    loop: true,
                  }}
              />
            </div>
            <p>Improving every day.</p>
            <button>Contact Me</button>
          </div>
          <div className={styles.contact}>
            <div className={styles.dates}>
              <h4>Email</h4>
              <p>santicortesrincon15@gmail.com</p>
            </div>
            <div className={styles.dates2}>
              <h4>Phone</h4>
              <p>+57 300-605-2291</p>
            </div>
            <div className={styles.dates}>
              <h4>Location</h4>
              <p>Colombia</p>
            </div>
          </div>
          <div className={styles.img}>
            <img src='' alt="" />
          </div>
        </div>
    </>
  );
};
