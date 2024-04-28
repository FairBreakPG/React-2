import React, { useState } from "react";
import Alert from "./Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import limpiarCampos from "../../utils/limpiarCampos";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    if (nombre === "" || email === "" || password === "" || password2 === "") {
      setError(true);
      setRegistroExitoso(false);
      return;
    } else if (password !== password2) {
      setError(false);
      setError2(true);
      setRegistroExitoso(false);
      return;
    }

    setError(false);
    setError2(false);
    limpiarCampos(
      setNombre,
      setEmail,
      setPassword,
      setPassword2,
      setRegistroExitoso
    );
    setRegistroExitoso(true);
  };

  return (
    <form className="formIngreso" onSubmit={validarDatos}>
      <div className="containerForm">
        <div className="mb-3 formIngresoDivForm">
          <div className="mb-3 infoPersona">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Nombre"
                className="form-control nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="tuemail@ejemplo.com"
                className="form-control email"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirme contraseña"
              className="form-control confirmPassword"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
          </div>
          <div className="mb-3 d-grid gap-2">
            <button type="submit" className="btn btn-success">
              Registrarse
            </button>
          </div>
          {error && (
            <Alert mensaje="Completa todos los campos !" tipo="danger" />
          )}
          {error2 && (
            <Alert mensaje="Las contraseñas no coinciden" tipo="danger" />
          )}
          {registroExitoso && !error && !error2 && (
            <Alert mensaje="Registro exitoso" tipo="success" />
          )}
        </div>
      </div>
    </form>
  );
};

export default Formulario;
