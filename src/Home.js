import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="fondo">
      <nav className="navegacion">
        <ul className="menu">
          <li>
            <a className="a"> Catalogo</a>
            <div className="submenu"></div>
          </li>
          <li>
            <a href="./Recetas"> Recomendaciones</a>
          </li>
          <li>
            <a className="a"> Soporte</a>
            <div className="submenu">
              <a className="a" href="mailto:latinbarberofficial@gmail.com">
                Gmail
              </a>
              <a
                className="a"
                href="https://www.instagram.com/latinbarberofficial/"
              >
                Instagram
              </a>
            </div>
          </li>
          <li></li>
        </ul>
      </nav>
      <br></br>

      <h1 className="titulo">Bienvenidos a Latin-Barber</h1>
      <br></br>
      <br></br>
      <h1 className="contenedor">
        Esta pagina esta especificamente desarrollada para aquellas personas que
        desean gestionar y apartar una cita para el servicio de barberia
      </h1>
      <h1 className="contenedor">
        daremos en sus manos la mejor experiencia para su asignacion cita y
        definicion de su corte de cabello,te ofrecemos un amplio catalogo donde
        observaras los cortes y estilos que nuestros profecionales realizaran de
        la mejor manera y haran relucir tu belleza
      </h1>
    </div>
  );
}
