import React from "react";
import "../style-sheets/Pantalla.css";

const Pantalla = (props) => (
	<div id="divPantalla" className="input" style={{fontSize: props.fontSize}}>
		{props.input}
	</div>
);

export default Pantalla;