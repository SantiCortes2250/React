import React from "react";
import styles from "../CSS/about.module.css";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const AboutMe = () => {
  const { t, i18n } = useTranslation(["info"]);

  return (
    <Suspense fallback="Cargando Traducciones">
      <div className={styles.container} id="about">
        <h2 className={styles.section}>
          {i18n.language === 'en' ? 'About me' : 'Sobre mi'}
          <span className={styles.title}> About </span>
        </h2>
        <div className={styles.about}>
          <div className={styles.img}>
            <img src={t("image")} alt="" />
          </div>
          <div className={styles.info}>
            <h2>I'm Santi Rincon, a Frontend Developer and Freelancer</h2>
            <p>{t("Description")}</p>
            <hr />
            <div className={styles.dates}>
              <p>
                Name:<span>{t("name")}</span>
              </p>
              <p>
                From:<span>{t("From")}</span>
              </p>
              <p>
                Phone:<span>{t("Phone")}</span>
              </p>
              <p>
                Email:<span>{t("Email")}</span>
              </p>
            </div>
            <a href="./cv-santiagoRincon.pdf" download>
              {" "}
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AboutMe;
