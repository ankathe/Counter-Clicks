import "./App.css";
import Boton from "./components/Boton";
import Counter from "./components/Counter";
import { useState } from "react";
import Logo from './components/logo';

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
      <Logo/>
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
