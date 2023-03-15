import React from "react";
import "./styles.css";

export default function Registro() {
  return (
    <div className="fondo">
      <br></br>
      <div class="form-register">
        <h4>Formulario Registro</h4>
        <input
          class="controls"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su Nombre"
        />
        <input
          class="controls"
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Ingrese su Apellido"
        />
        <input
          class="controls"
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Ingrese su numero de celular"
        />
        <input
          class="controls"
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingrese su Correo"
        />
        <input
          class="controls"
          type="password"
          name="correo"
          id="correo"
          placeholder="Ingrese su Contraseña"
        />
        <p>
          Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
        </p>
        <input class="botons" type="submit" value="Registrar" />
        <p>
          <a href="#">¿Ya tengo Cuenta?</a>
        </p>
      </div>
    </div>
  );
}
