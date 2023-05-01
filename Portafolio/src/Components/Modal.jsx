import React, { useEffect } from "react";
import styles from "../CSS/modal.module.css";
import info from '../../info.json'

function Modal({ isOpen, setIsOpen, id }) {

  const experience = info.Experience.find((expe) => expe.id === id)


 
  return (
    <>
    {isOpen && <>
      <div className={styles.overlay} onClick={() => setIsOpen(!isOpen)}></div>

<div className={styles.modal} id="modal">
  <div className={styles.btn}>
    <button onClick={() => setIsOpen(!isOpen)}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679702271/Projects/icons/cerrar_vskf8q.png"></img></button>
  </div>
  <h2>{experience.company}</h2>
  <p>Tasks</p>
  <div className={styles.tasks}>
    {
      experience.tasks?.map((task, index) => (
       
        <div className={styles.task} key={index}>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1682957842/Projects/icons/vi%C3%B1eta_gjnx0v.png" alt="" />
          <p>{task}</p>
        </div>    
      )
    )} 

  </div>
 
</div>
    
    </>}
      
    </>
  );
}

export default Modal;
