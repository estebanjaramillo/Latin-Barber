import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <nav className="navegacion">
        <ul className="menu">
          <li>
            <a className="a" href="/Catalogo">
              Reserva Online
            </a>
          </li>
          <li>
            <a className="a" href="/Recomendaciones">
              Recomendaciones
            </a>
          </li>
          <li>
            <a className="a">Nosotros</a>
            <div className="submenu">
              <a className="a" href="/Quienessomos">
                Quienes somos
              </a>
              <a className="a" href="/Mision">
                Mision
              </a>
            </div>
          </li>
          <li>
            <a className="a">Redes sociales </a>
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
          <li>
            <a className="a" href="/Registro">
              Registrate
            </a>
          </li>
          <li>
            <a className="a" href="/Login">
              Login
            </a>
          </li>
        </ul>
      </nav>
      <br></br>

      <h1 className="titulo">Bienvenidos a Latin-Barber</h1>
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
