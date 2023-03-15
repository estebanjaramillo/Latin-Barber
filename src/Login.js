import React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div>
      <br></br>
      <div className="form-register">
        <h4> Login</h4>
        <input
          className="controls"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su Correo"
        />
        <input
          className="controls"
          type="password"
          name="correo"
          id="correo"
          placeholder="Ingrese su Contraseña"
        />
        <input className="botons" type="submit" value="enviar" />
        <p>
          <a href="/Registro">¿No tengo Cuenta?</a>
        </p>
      </div>
    </div>
  );
}
