import "./App.css";
import logo from "./images/logo-projects-react.png";
import Boton from "./components/Boton";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0); 
  const manejarClick = () => {
    setNumClicks(numClicks + 1); 
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo clicks counter" />
      </div>
      <div className="title">CLICKS COUNTER </div>
    
      
      <div className="container-counter-principal">
        <Counter numClicks = {numClicks} />
        <Boton text="Click" esBtnDeClick={true} manejarClic={manejarClick} />
        <Boton text="Restart" esBtnDeClick={false} manejarClic={restartCounter} />
      </div>
    </div>
  );
}

export default App;
