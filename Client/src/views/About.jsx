import React from "react";
import style from "../views/About.module.css";
import picture from "../assets/imgs/DSC_0031-2.jpg";

const About = () => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <p className={style.heading}>Tobias Olveira</p>
        <p className={style.para}>
          Tengo 27 años y actualmente estoy trabajando en Berlitz Argentina como
          docente de inglés para empresas y particulares. De certificaciones
          tengo un bachiller bilingüe, el First Certificate y los exámenes
          IGCSEs. Soy profesor hace dos años y me especializo en inglés
          conversacional. Actualmente complemento mis clases en Berlitz con
          clases particulares virtuales durante la semana.
        </p>
      </div>
      <img className={style.selfPicture} src={picture} alt="Foto mia" />
    </div>
  );
};

export default About;
