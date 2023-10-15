import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      timer: 0,
    };
    this.intervalId = null;
  }

  startTimer = () => {
    this.setState({ isStarted: true });
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
    this.setState({ isStarted: false });
  };

  resetTimer = () => {
    clearInterval(this.intervalId);
    this.setState({ isStarted: false, timer: 0 });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: '#B2F7EF', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="App-container p-3 rounded" style={{ background: 'white', width: '80%' }}>
          <div className="App-content" style={{ textAlign: 'center' }}>
            <h1>Timer</h1>
            {this.state.isStarted ? (
              <div>
                <p>TEMPO GASTO: {this.state.timer}s</p>
                <div className="btn-group">
                  <button className="btn btn-danger" onClick={this.stopTimer}>Parar</button>
                  <button className="btn btn-warning" onClick={this.resetTimer}>Finalizar</button>
                </div>
              </div>
            ) : (
              <button className="btn btn-primary" onClick={this.startTimer}>Começar</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
