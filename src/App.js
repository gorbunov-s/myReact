import React, { Component } from 'react';
import './App.css';

import { findPokemonByName, findAllPokemons } from './services/pokeServices';

// Components
import Select from './components/Select';
import Pokemon from './components/Pokemon';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      currentPokemon: {},
      pokemonList: [],
      loading: false
    }
  }

  componentDidMount() {
    this.pokemonFinder();
  }

  pokemonFinder = () => {
    findAllPokemons().then(pokemonList => {
      this.setState({
        pokemonList,
      })
    });
  };

  pokemonDataFinder = (name) => {
    const DEFAULT_AVATAR = 'https://i.mycdn.me/image?id=812378169248&plc=WEB&tkn=*B46OADZOK_YqBGxieVHpUuhHKzM&fn=sqr_288';

    this.setState({
      currentPokemon: {},
      loading: true,
    });

    findPokemonByName(name).then(currentPokemon => {
      currentPokemon.avatar = currentPokemon.sprites['front_default'] || DEFAULT_AVATAR;

      this.setState({
        currentPokemon,
        loading: false,
      });
    });
  };


  render() {
    const {currentColor, customColorList, isOpen, filter } = this.state;

    return (

      <div>
        <p className={ 'poke-header' }>Найди своего ПОКЕМОНА</p>

        <Select className={ 'red' }
                name={ this.state.currentPokemon.name }
                pokemonList={ this.state.pokemonList }
                limit={ 10 }
                onChange={ this.pokemonDataFinder }
        />

        <Pokemon pokemon={ this.state.currentPokemon }/>

      
      </div>
    );
  }
}

export default App;
