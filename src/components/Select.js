// Example <Title className={ 'red' } onClick={ this.toggleList }>{ name } />

import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      filter: '',
      customPokemonList: [],
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.pokemonList !== nextProps.pokemonList) {
      this.setState({
        customPokemonList: nextProps.pokemonList
      }, this.filterNow);
    }

    return true;
  }

  toggleList = () => {
    this.setState({
      isOpen: !this.state.isOpen,
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

      return pokemon.name.indexOf(filter) !== -1
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

  render() {
    return (
      <div className={ 'select' }>
        <div className={ `selectHeader ${this.props.className} ${this.state.isOpen && 'selectOpen'}` }
             onClick={ this.toggleList }
        >
          { this.props.name || 'Покемон не выбран' }
        </div>

        {
          this.state.isOpen &&
          <div className='itemList'>
            <input type={ 'text' } value={ this.state.filter } onChange={ this.filterChanger }/>

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
