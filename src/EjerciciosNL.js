import React from "react";
import "./styles.css";
import imagenes from "./imagenes";

function EjerciciosNL() {
  return (
    <div className="fondo">
      <h1 className="titulo">Ejercicios Nivel Legendario</h1>
      <br />
      <br />
      <br />
      <br />

      <div className="contenedorEJ">
        <h1 className="tiutlo">Dominada</h1>

        <img src={imagenes.img11} />
        <br></br>
        <br></br>

        <h2>POSICION INICIAL:</h2>
        <h2>
          Posicionar las manos en la barra a una apertura 10 cm mayor que los
          hombros
        </h2>
        <h2>EJECUCION:</h2>
        <h2>
          Con la ayuda de los brazos y tensionando los abdominales, debes subir
          la barra hasta casi tocar el pecho
        </h2>
        <h2>
          El movimiento debe ser siempre controlado, en caso de no poder
          disminuir la apertura del agarre o doblar las rodillas
        </h2>
        <h2>
          Asegúrate de utilizar los músculos de la espalda para llegar hasta
          arriba.
        </h2>
        <h2>
          El pecho debe permanecer hacia adelante y la mirada hacia el frente.
        </h2>
        <h2>En lo alto del movimiento debes juntar los omóplatos</h2>
        <h2>Regresa lentamente a la posición inicial y repite nuevamente.</h2>
      </div>

      <div className="contenedorEJ">
        <h1 className="tiutlo">Curl Concentrado De Bíceps</h1>
        <img src={imagenes.img12} />
        <br></br>
        <br></br>

        <h2>POSICION INICIAL:</h2>
        <h2>Agarra una mancuerna con una mano.</h2>
        <h2>
          Siéntate al borde de un banco y coloca los pies más separados que la
          distancia de los hombros.
        </h2>
        <h2>
          Coloca la parte posterior del brazo con la mancuerna en la parte
          interna del muslo y apóyate con la otra mano sobre la otra rodilla.
        </h2>
        <h2>EJECUCION</h2>
        <h2>Levanta lentamente la mancuerna lo más alto que puedas.</h2>
        <h2>
          Haz una pausa en lo alto y luego baja la mancuerna lentamente hasta
          volver a la posición inicial.
        </h2>
      </div>

      <div className="contenedorEJ">
        <h1 className="tiutlo">Press Militar Con Mancuernass</h1>
        <img src={imagenes.img13} />
        <br></br>
        <br></br>

        <h2>POSICION INICIAL:</h2>
        <h2>
          Coge las mancuernas y siéntate en la silla con la espalda bien recta,
          evita curvarla.
        </h2>
        <h2>
          Empieza a levantar las mancuernas lentamente hasta la altura del
          hombro de manera secuencial, es decir, primero una y luego otra.
        </h2>
        <h2>
          Vuelve a la posición inicial dejando las mancuernas en el suelo sin
          brusquedad.
        </h2>
      </div>
    </div>
  );
}
export default EjerciciosNL;
