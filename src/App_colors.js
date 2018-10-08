import React, { Component } from 'react';
import './App.css';
import { PokemonFinder } from './components/pokemonFinder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: 'red',
      colorList : ['red', 'green', 'blue', 'black', 'yellow'],
      isOpen : false,
      filter : '',
	  customColorList : [],
    };
  }

  componentDidMount() {
	  this.setState({
	  customColorList :  this.state.colorList}) 
  }
  selectColor = (currentColor) => {
    this.setState({
		currentColor,
	});
   }
   
  toggleList = () => {
	this.setState({
		isOpen: !this.state.isOpen,
	});
  } 
  filterChanger = (e) => {
	this.setState({
		filter: e.target.value,
	})
};
filterNow = () => {
	const { colorList, filter } = this.state;
	
	let customColorList = colorList.filter(function(item){
		return item.indexOf(filter) !== -1
	});
	
	this.setState({
		customColorList,
	})
}; 
  render() {
    const {currentColor, customColorList, isOpen, filter } = this.state;

    return (
      <div className={"App "}>
        <header className="App-header">
			<h1 className={currentColor} onClick={this.toggleList}>{currentColor}</h1>
        </header>
		{
		 isOpen ? 
		  <div className='itemList'>
			<input type={'text'} value={filter} onChange={this.filterChanger} />		  
			<button onClick={this.filterNow}>Filter!</button>        
		   { customColorList.map(item => 
              <p className='item' key={item} onClick={() => this.selectColor(item)}>{item}</p>
             )}
		  </div>
		  : null			 
		}
      </div>
    );
  }
}

export default App;
