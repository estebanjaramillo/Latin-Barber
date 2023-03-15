import React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div className="fondo">
      <br></br>
      <div class="form-register">
        <h4> Login</h4>
        <input
          class="controls"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Ingrese su Correo"
        />
        <input
          class="controls"
          type="password"
          name="correo"
          id="correo"
          placeholder="Ingrese su Contraseña"
        />
        <input class="botons" type="submit" value="enviar" />
        <p>
          <a href="#">¿No tengo Cuenta?</a>
        </p>
      </div>
    </div>
  );
}
