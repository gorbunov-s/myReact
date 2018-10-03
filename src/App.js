import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import H1 from './components/H1';


class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
      inputValue: '',

    };
  }
   inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  };
   inputColor = (e) => {
    if(this.value === 1) {
      color: 'red'
    } else if (this.value ===2) {
      color: 'green'
    } else if (this.value ===3) {
      color: 'blue'
    } else {
      color: 'black'
    }
      console.log('color');
   };
    inputFontSize = (e) => {
      if(this.value === 5) {
 
      }
    }
  render() {
    const { inputValue } = this.state;
    console.log(inputValue);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
		      
        </header>
        <H1 text={inputValue} color={this.color} size={this.size}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
        <input type='password' value={inputValue} onChange={this.inputHandler} /><br/><br/>
    		<label>red:
          <input  type='radio' name='group' value='1' onChange={this.inputColor} />
        </label>
        <label>green:
          <input  type='radio' name='group' value='2' onChange={this.inputColor} />
        </label>
        <label>blue:
          <input  type='radio' name='group' value='3' onChange={this.inputColor} />
        </label>
        <label>reset:
          <input  type='radio' name='group' value='4' onChange={this.inputColor} />
        </label><br/><br/>
        <label>
          <input  type='checkbox' value='5' onChange={this.inputFontSize} />
        1</label><br/>
        <label>
          <input  type='checkbox' value='6' onChange={this.inputFontSize} />
        2</label>
        </form>
      </div>
    );
  }
}

export default App;
