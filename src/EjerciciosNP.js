import React from "react";
import imagenes from "./imagenes";
import "./styles.css";

function EjerciciosNP() {
  return (
    <div className="fondo">
      <h1 className="titulo">Ejercicios Nivel profesional</h1>
      <br />
      <br />
      <br />
      <br />

      <div className="contenedorEJ">
        <h1 className="tiutlo">Tríceps Apoyado En Una Silla</h1>

        <img src={imagenes.img8} />
        <h2>POSICION INICIAL:</h2>
        <h2>Agarre los bordes delanteros de una silla o banco con la mano.</h2>
        <h2>
          Mueva su trasero justo afuera y enfrente del asiento, con los pies
          planos y las piernas dobladas para que los muslos estén paralelos al
          piso.
        </h2>
        <h2>Endereza tus brazos. Esta es tu posición de inicio.</h2>
        <h2>
          Baje su cuerpo hacia el piso hasta que sus brazos formen ángulos de 90
          grados.
        </h2>
        <h2>
          Luego, active sus tríceps para presionar hacia atrás para comenzar.
        </h2>
        <h2>¡Esa es una repetición!</h2>
      </div>

      <div className="contenedorEJ">
        <h1 className="tiutlo">Zancadas</h1>
        <img src={imagenes.img9} />
        <h2>POSICION INICIAL:</h2>
        <h2>
          Primero de todo, colócate de pie y sitúa una pierna al frente como si
          fueras a dar un paso largo. Mientras los pies y las rodillas están
          frente al cuerpo.
        </h2>
        <h2>
          Empieza el movimiento. Dobla las rodillas y la parte posterior
          inferior de la rodilla hacia abajo.
        </h2>
        <h2>
          Es importante que el cuerpo permanezca recto contrayendo el abdomen
          para quedarnos en la posición uno segundos.
        </h2>
        <h2>
          También debes mantener la parte delantera del talón y la rodilla
          directamente sobre el centro del pie.
        </h2>
        <h2>
          Luego regresamos a la posición inicial y empezamos de nuevo el
          movimiento con la otra pierna.
        </h2>
      </div>

      <div className="contenedorEJ">
        <h1 className="tiutlo">Abdominales</h1>
        <img src={imagenes.img10} />
        <h2>POSICION INICIAL:</h2>
        <h2>
          Túmbate boca arriba con las rodillas dobladas encima de una colchoneta
          (si no cuentas con una solo acuestate en el suelo)
        </h2>
        <h2>Apoya las manos sobre la cabeza</h2>
        <h2>EJECUIÒN:</h2>
        <h2>sube el torso a las rodillas sin despeguar los pies del suelo </h2>
        <h2>vuelve a acostarte (ten cuidado de no golpearte la cabeza)</h2>
        <h2>¡Eso cuenta como una repetición!</h2>
      </div>
    </div>
  );
}

export default EjerciciosNP;
