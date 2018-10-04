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
      colorList : ['red', 'green', 'blue', 'black', 'yellow'],
      defaultCard : 'black',
      value : '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  };

  inputColor = (e) => {
    const color = e.target.value;
    this.setState({color});
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
  handleSubmit(event) {
    alert('A password was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { inputValue, color, customClass, colorList, defaultCard } = this.state;

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
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Password:
            <input type='password' value={inputValue} onChange={this.inputHandler} /><br/><br/>
          </label>
          <input type="submit" value="Submit" />
        </form>
          { colorList.map((item) => {
            return (
  
              <label key={item.toString()}>
                {item}: <input defaultChecked={item.toString() === defaultCard} type='radio' name='group' value={item} onChange={this.inputColor} />
              </label>
 
            )
          }) }
          
         
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

      </div>
    );
  }
}

export default App;
