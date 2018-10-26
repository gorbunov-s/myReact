import React, { Component } from 'react';
import './App.css';
//services
import { findPokemonByName, findAllPokemons, Error } from './services/pokeServices';
// Components
import Select from './components/Select';
import Pokemon from './components/Pokemon';
//import H1 from './components/H1'

//console.log(Error);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
	  Error : {},
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
    const { currentPokemon, pokemonList } = this.state;
    return (
      
		<div className={'page'}>
			<p className={ 'poke-header' }>Найди своего ПОКЕМОНА</p>
			<Pokemon pokemon={ currentPokemon } loading={ this.state.loading}/>
			<Select className={ 'red' }
					name={ currentPokemon.name }
					pokemonList={ pokemonList }
					limit={ 10 }
					onChange={ this.pokemonDataFinder }
			/>

		</div>
        
      
    );
  }
}

export default App;
