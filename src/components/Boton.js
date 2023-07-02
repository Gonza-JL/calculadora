import React from "react";
import "../style-sheets/Boton.css";

function Boton(props) {
  let claseAdicional = "";
  if (esOperador(props.children)) {
    claseAdicional = "operador";
  } else if (esBotonEspecial(props.children)) {
    claseAdicional = "boton-especial";
  }

  return (
    <div
      className={`boton-contenedor ${claseAdicional}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export function esOperador(valor) {
  return valor === "+" || valor === "-" || valor === "*" || valor === "/";
}

function esBotonEspecial(valor) {
  return valor === "AC" || valor === "%" || valor === "=";
}

export default Boton;
