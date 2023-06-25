import "./App.css";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState(60);

  const agregarInput = val => {
    setInput(input + val);

    const divPantalla = document.getElementById("divPantalla");
    divPantalla.innerHTML = input;

    if (divPantalla.scrollWidth > divPantalla.offsetWidth) {
      setFontSize(fontSize - 5);
    }
  };

  const clearPantalla = () => {
    setInput("");
    setFontSize(60);
  };

  const calcularResultado = () => {
    if (input) {
      try {
        setInput(evaluate(input).toString());
      } catch {
        alert("Operación inválida.")
      }
    } else {
      alert("Por favor ingrese valores para calcularlos.")
    }
  };

  return (
    <div className="App">
        <div className="contenedor-calculadora">
          <Pantalla input={input} fontSize={`${fontSize}px`} />
          <div className="fila">
            <Boton manejarClick={agregarInput}>(</Boton>
            <Boton manejarClick={agregarInput}>)</Boton>
            <Boton manejarClick={agregarInput}>%</Boton>
            <Boton manejarClick={clearPantalla}>AC</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
        </div>
    </div>
  );
}

export default App;