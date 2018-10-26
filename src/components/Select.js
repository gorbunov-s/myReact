// Example <Title className={ 'red' } onClick={ this.toggleList }>{ name } />
import H1 from './H1'
import React, { Fragment } from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
	
    this.state = {
      isOpen: false,
      filter: '',
      customPokemonList: [],
    }
	this.input = React.createRef();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.pokemonList !== nextProps.pokemonList) {
      this.setState({
        customPokemonList: nextProps.pokemonList
      }, this.filterNow);
    }
    return true;
  }

  toggleList = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
    }, () => {
		alert('Pick');
		this.input.current.focus();
	});
  };

  filterChanger = (e) => {
    this.setState({
      filter: e.target.value,
    }, this.filterNow)
  };

  filterNow = () => {
    const { pokemonList, limit } = this.props;
    const { filter } = this.state;

    let customPokemonList = pokemonList.filter(function (pokemon) {
      return pokemon.name.indexOf(filter.toLowerCase()) !== -1
    });

    this.setState({
      customPokemonList: customPokemonList.slice(0, limit),
    })
  };

  selectPokemon = (name) => {
    this.props.onChange(name);

    this.setState({
      isOpen: false,
    })
  };
/* componentDidMount() {
    document.addEventListener('click', this.onInputClick, true);
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.onInputClick, true);
  }

  onInputClick = (e) => {
    if (this.div.contains(e.target)){
      alert('Click');
      this.input.current.focus();
    }
  };*/
  render() {
	  
	  console.log('render Select', this.input);
    return (
      <div className={ 'select' }>

        <div className={ `selectHeader ${this.props.className} ${this.state.isOpen && 'selectOpen'}` } onClick={ this.toggleList } >
          { this.props.name ? 'Я твой ПОКЕМОН' : 'Кто это???' }
        </div>

        {
          this.state.isOpen &&
		  
          <div className='itemList'>

            <input type={ 'text' } value={ this.state.filter } onChange={ this.filterChanger } ref={ this.input } />

            { this.state.customPokemonList.length ?
              <div className='pokeList'>
                { this.state.customPokemonList.map(pokemon => {
                  return (
                    <p key={ pokemon.url }
                       onClick={ () => this.selectPokemon(pokemon.name) }>
                      { pokemon.name }
                    </p>
                  )
                })}
              </div>
              : <p>Нет такого</p> }
          </div>
        }

      </div>
    )
  }
}

export default Select;
