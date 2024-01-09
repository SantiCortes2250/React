import React from "react";
import info from "../../public/locales/en/info.json";
import style from "../CSS/resume.module.css";
import { useTranslation } from "react-i18next";

const Resume = ({ isOpen, setIsOpen, setId }) => {
  const { t } = useTranslation(["info"]);

  const experience = [
    {
      id: 1,
      company: "DevoCamp",
      year: "2023",
      work: "Frontend Developer",
      tasks: [
        "Develop user layout designs in a functional way so users can interact with content easily and intuitively.",
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

  const education = [
    {
      certificate:
        "Technologist in analysis and development of information systems",
      year: "2020 - 2022",
      university: "SENA",
    },
    {
      certificate: "Software programming technician",
      year: "2019 - 2020",
      university: "SENA",
    },
    {
      certificate: "Baccalaureate",
      year: "2020",
      university: "Marcelino Champagnat",
    },
  ];

  return (
    <div className={style.container} id="resume">
      <h2 className={style.section}>
        My Resume
        <span className={style.title}> Resume </span>
      </h2>
      <div className={style.cardsC}>
        <div className={style.cards}>
          <h2>Experience</h2>
          {experience.map((expe, index) => (
            <div key={index}>
              <img
                src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677974346/Projects/icons/flecha_jw9v6e.png"
                alt=""
                className={style.img}
              />
              <div className={style.info}>
                <h4>{expe.company}</h4>
                <p>{expe.year}</p>
                <p>{expe.work}</p>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen), setId(expe.id);
                  }}
                >
                  Tasks
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={style.cards}>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <img
                src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677974346/Projects/icons/flecha_jw9v6e.png"
                alt=""
                className={style.img}
              />
              <div className={style.info}>
                <h4>{t(edu.certificate)}</h4>
                <p>{edu.year}</p>
                <p>{edu.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
