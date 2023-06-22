import "./App.css";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val);
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
          <Pantalla input={input}/>
          <div className="fila">
            <Boton manejarClick={() => setInput("")}>AC</Boton>
            <Boton manejarClick={() => setInput(input.substring(0, input.length - 1))}>CE</Boton>
            <Boton manejarClick={agregarInput}>%</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={calcularResultado}>=</Boton>
          </div>
        </div>
    </div>
  );
}

export default App;