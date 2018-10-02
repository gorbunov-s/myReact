import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import H1 from './components/H1.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'test',
    };
  }

  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <H1 className='App-title' text={"Welcome to " + inputValue}/>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <input type='text' value={inputValue} onChange={this.inputHandler} />
      </div>
    );
  }
}

export default App;
