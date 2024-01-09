import React, { useEffect } from "react";
import styles from "../CSS/modal.module.css";
import info from '../../public/locales/en/info.json'
import { useTranslation } from "react-i18next";

function Modal({ isOpen, setIsOpen, id }) {
  const { t } = useTranslation(["info"]);

  const experience = [
    {
      id: 1,
      company: "DevoCamp",
      year: "2023",
      work: "Frontend Developer",
      tasks: [
        "develop",
        "Collaboration with other team members.",
        "Create modular components for the development of user interfaces, which can be reused in different parts of the web page.",
      ],
    },
    {
      id: 2,
      company: "Buses Armenia",
      year: "2022 - 2022",
      work: "Frontend Developer",
      tasks: [
        "Development of web pages.",
        "Performance optimization.",
        "Component Functionality.",
        "Research and development of new technologies.",
        "Movile Desing.",
      ],
    },
    {
      id: 3,
      company: "Booker",
      year: "2021 - 2022",
      work: "Frontend Developer",
      tasks: [
        "Development of user interfaces.",
        "Implementation of UX/UI designs.",
        "Component programming.",
        "Integration of APIs and web services.",
        "using git and github",
        "First Mobile.",
      ],
    },
  ];

  const findExperience = experience.find((expe) => expe.id === id)


 
  return (
    <>
    {isOpen && <>
      <div className={styles.overlay} onClick={() => setIsOpen(!isOpen)}></div>

<div className={styles.modal} id="modal">
  <div className={styles.btn}>
    <button onClick={() => setIsOpen(!isOpen)}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679702271/Projects/icons/cerrar_vskf8q.png"></img></button>
  </div>
  <h2>{findExperience.company}</h2>
  <p>Tasks</p>
  <div className={styles.tasks}>
    {
      findExperience.tasks?.map((task, index) => (
       
        <div className={styles.task} key={index}>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1682957842/Projects/icons/vi%C3%B1eta_gjnx0v.png" alt="" />
          <p>{t(task)}</p>
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
