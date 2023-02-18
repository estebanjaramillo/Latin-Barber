import React from "react";
import imagenes from "./imagenes";
import "./styles.css";

export default function Recetas() {
  return (
    <div className="fondo">
      <h1 className="titulo">Recetas</h1>
      <br />
      <br />
      <br />
      <br />

      <div className="contenedorEJ">
        <h1 className="tiutlo">Caldo De Verduras</h1>
        <br />
        <br />
        <img src={imagenes.img14} />
        <br />
        <br />
        <h2>
          Limpia y pela verduras variadas como el apio, la zanahoria, el puerro
          o el nabo y córtalas a trocitos.
        </h2>
        <h2>
          Rehoga en una cazuela con un chorrito de aceite la cebolla y el puerro
          hasta que se doren.
        </h2>
        <h2>Añade el resto de verduras y saltéalas durante 5 minutos.</h2>
        <h2>
          Incorpora agua y hierbas aromáticas como el tomillo y el laurel.
        </h2>
        <h2>dejalo hervir todo a fuego suave durante 15 minutos.</h2>
        <h2>Cuendo esté listo, cuélalo</h2>.
      </div>

      <div className="contenedorEJ">
        <h1 className="tiutlo">Homelet Con Aguacate</h1>
        <br />
        <br />
        <img src={imagenes.img15} />
        <br />
        <br />
        <h2>Machaca 3 rebanadas de aguacate en un tazón pequeño.</h2>
        <h2> Agrega 2 cucharadas de crema para cocinar y mezcla bien.</h2>
        <h2>Calienta el aceite en una sartén grande a fuego medio.</h2>
        <h2>
          Agrega las cebollas, los pimientos y cocínalos 2 minutos,
          revolviéndolos de vez en cuando.
        </h2>

        <h2> Echa los tomates y cocínalos por 1 minuto.</h2>
        <h2> Retíralos de la sartén y tapa para mantenerlos calientes.</h2>
        <h2>
          Mientras, bate bien los huevos enteros con las claras de huevo y el
          resto de la crema para cocinar.
        </h2>
        <h2>
          {" "}
          viértelos en el sartén y cocínalos de 3 a 4 minutos, o hasta que casi
          cuajen.
        </h2>
        <h2>
          debes de ir levantando los bordes con una espátula e inclinando la
          sartén de vez en cuando para que lo no se pegue a la sartén.
        </h2>
        <h2>
          Cuando la mezcla de huevo se cocine, pero todavía esté húmeda por
          arriba, ponle la mezcla de cebollas y aguacate.
        </h2>
        <h2>
          Desliza la espátula por debajo de la omelette, inclina la sartén para
          aflojarla y, con cuidado, dobla la omelette por la mitad y sirve.
        </h2>
        <h2>
          Corta la rebanada de aguacate restante y ponle a cada porción la salsa
          de aguacate, el perejil y un pedazo de aguacate.
        </h2>
      </div>
    </div>
  );
}
