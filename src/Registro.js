import React from "react";
import "./styles.css";

export default function Registro() {
  return (
    <div className="fondo">
      <br></br>
      <div className="form-register">
        <h4>Formulario Registro</h4>
        <input
          className="controls"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su Nombre"
        />
        <input
          className="controls"
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Ingrese su Apellido"
        />
        <input
          className="controls"
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingrese su Correo"
        />
        <input
          className="controls"
          type="password"
          name="correo"
          id="correo"
          placeholder="Ingrese su Contraseña"
        />
        <p>
          Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
        </p>
        <input className="botons" type="submit" value="Registrar" />
        <p>
          <a href="/Login">¿Ya tengo Cuenta?</a>
        </p>
      </div>
    </div>
  );
}
