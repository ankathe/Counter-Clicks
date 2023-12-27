import React from 'react';
import "./App.css";
import Boton from "./components/Boton";
import Counter from "./components/Counter";
import Logo from './components/logo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.restartCounter = this.restartCounter.bind(this);
  }

  manejarClick() { 
    this.setState(({numClicks}) => ({numClicks: numClicks + 1}));
  }

  restartCounter() {
    this.setState({numClicks:0});
  }

  render() {
    return (
      <div className="App">
        <Logo/>
        <div className="title">CLICKS COUNTER </div>
        <div className="container-counter-principal">
          <Counter numClicks = {this.state.numClicks} />
          <Boton 
          text="Click" 
          esBtnDeClick={true} 
          manejarClick={this.manejarClick} />
          <Boton 
          text="Restart" 
          esBtnDeClick={false} 
          manejarClick={this.restartCounter} />
        </div>
      </div>
    );
  }
}

export default App;
