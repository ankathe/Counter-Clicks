import "./App.css";
import logo from "./images/logo-projects-react.png";
import Boton from "./components/Boton";
import Counter from "./components/Counter";

function App() {
  const manejarClick = () => {
    console.log("click");
  };

  const restartCounter = () => {
    console.log("restart");
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo clicks counter" />
      </div>
      <counter numClicks = '5' />
      
      <div className="container-counter-principal">
        <Boton text="Click" esBtnDeClick={true} manejarClic={manejarClick} />
        <Boton text="Restart" esBtnDeClick={false} manejarClic={restartCounter} />
      </div>
    </div>
  );
}

export default App;
