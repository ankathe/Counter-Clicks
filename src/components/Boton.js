import React from "react";
import "./Boton.css";

function Boton({ text, esBtnDeClick, manejarClic }) {
  return (
    <button
      className={esBtnDeClick ? "btn-click" : "btn-restart"}
      onClick={manejarClic}
    >
      {text}
    </button>
  );
}

export default Boton;
