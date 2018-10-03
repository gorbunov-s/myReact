import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import H1 from './components/H1';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      color: 'black',
      customClass : [],
    };
  }
  
  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  };

  inputColor = (e) => {
    const value = e.target.value;
    let color1;

    if (value === '1') {
      color1 = 'red'
    } else if (value === '2') {
      color1 = 'green'
    } else if (value === '3') {
      color1 = 'blue'
    } else {
      color1 = 'black'
    }

    this.setState({color: color1});
  };

  inputFont = (e) => {
    let customClass = this.state.customClass.slice();
    const value = e.target.value;
    const idx = customClass.indexOf(value);

    if (idx === -1) {
      customClass.push(value)
    } else {
      customClass.splice(idx, 1);
    }

    this.setState({
      customClass : customClass, // might be { customClass }
    })
  };

  render() {
    const { inputValue, color, customClass } = this.state;

    return (
      <div className={"App " + customClass.join(' ')}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <H1 className='App-title' text={inputValue} color={color} />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <form>
          <input type='password' value={inputValue} onChange={this.inputHandler} /><br/><br/>
          
          <label>
            red: <input type='radio' name='group' value='1' onChange={this.inputColor} />
          </label>
          
          <label>
            green: <input  type='radio' name='group' value='2' onChange={this.inputColor} />
          </label>
          
          <label>
            blue: <input  type='radio' name='group' value='3' onChange={this.inputColor} />
          </label>
          
          <label>
            reset: <input  defaultChecked type='radio' name='group' value='4' onChange={this.inputColor} />
          </label>
          
          <br/>

          <label>
            <input  type='checkbox' value='capitalize' onChange={this.inputFont} />
            capitalize
          </label>

          <br/>

          <label>
            <input  type='checkbox' value='decorate' onChange={this.inputFont} />
            decorate
          </label>
        </form>
      </div>
    );
  }
}

export default App;
