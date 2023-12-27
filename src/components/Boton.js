import React from "react";
import "./Boton.css";

class Boton extends React.Component {
    render() {
      return (
        <button
          className={this.props.esBtnDeClick ? "btn-click" : "btn-restart"}
          onClick={this.props.manejarClick}
        >
          {this.props.text}
        </button>
      );
    }
}

export default Boton;
