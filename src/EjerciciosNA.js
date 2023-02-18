import React from "react";
import imagenes from "./imagenes";

export default function EjerciciosNA() {
  return (
    <div className="fondo">
      <h1 className="titulo">Ejercicios Nivel Amateur</h1>
      <br />
      <br />
      <br />
      <br />

      <div className="contenedorEJ">
        <h1 className="tiutlo">Flexiones De suelo</h1>
        <img src={imagenes.img5} />
        <h2>POSICION INICIAL:</h2>
        <h2>Acuéstese boca abajo.</h2>
        <h2>
          Coloque las palmas de las manos en el suelo a la altura de los
          hombros, ligeramente más abiertos que el ancho de sus hombros.
        </h2>
        <h2>Mantenga su cuerpo erguido.</h2>
        <h2>EJECUCION:</h2>
        <h2>
          Levante el cuerpo hacia arriba e ir enderezando los brazos, procura
          mantener una postura erguida. Evita inclinar el tronco hacia atrás.
        </h2>
        <h2>
          El cuerpo debe apoyarse únicamente sobre las manos y los dedos de los
          pies, manteniendo la posición erguida todo el tiempo.
        </h2>
        <h2>
          Bajamos el cuerpo doblando los brazos, volvemos a la posición inicial
          extendiendo los brazos.
        </h2>
        <h2>
          No acostarse en el suelo durante el ejercicio. Desde el primer
          ejercicio de flexión de brazos hasta el último, el contacto con el
          suelo sólo lo deben tener los dedos de las manos y pies.
        </h2>
      </div>

      <div className="contenedorEJ">
        <h1>Flexiones En La Pared</h1>
        <img src={imagenes.img6} />
        <h2>POSICION INICIAL:</h2>
        <h2>
          De pie con los pies paralelos, separados a la anchura de las caderas.
          Apoya las manos contra la pared, a la altura de los hombros o un poco
          por debajo, manteniendo los brazos estirados. Elige la inclinación
          adecuada con respecto a la pared.
        </h2>
        <h2>EJECUCION:</h2>
        <h2>
          Deberemos inclinarnos levemente, apretando el abdomen y procurando no
          arquear la espalda. Llevaremos el pecho al muro hasta que toquemos y
          una vez allí, aguantaremos un instante y volveremos a flexionar los
          brazos hasta regresar a la posición de inicio. Eso, contará como una
          repetición.
        </h2>
      </div>

      <div className="contenedorEJ">
        <h1>Sentadillas Con Los Brazos Hacia Adelante </h1>
        <img src={imagenes.img7} />
        <h2>POSICION INICIAL:</h2>
        <h2>
          Primero colócate de pie con los pies un poco más separados que el
          ancho de tus hombros y estira los brazos a la altura de los ojos.
        </h2>
        <h2>EJECUCION:</h2>
        <h2>
          Después flexiona las rodillas mientras llevas las caderas hacia atrás
          hasta realizar una sentadilla. Continua agachándote lentamente hasta
          que los muslos queden paralelos al suelo. Recuerda mantener la espalda
          recta a lo largo de todo el ejercicio.
        </h2>
        <h2>
          Por último vuelve a estirar las rodillas sin levantar los talones del
          suelo y vuelve a la posición inicial.
        </h2>
      </div>
    </div>
  );
}
