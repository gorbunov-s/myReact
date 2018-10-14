import React, { Component } from 'react';
import { findPokemonByName } from '../services/pokeServices';

class PokemonFinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'ditto',
      currentPokemon: {},
    }
  }

  componentDidMount() {
    this.pokemonFinder();
  }

  nameHandler = (e) => {
    this.setState({
      name: e.target.value,
    })
  };

  pokemonFinder = () => {
    const { name } = this.state;

    findPokemonByName(name).then(currentPokemon => {
      currentPokemon.customSprites = [];

      for (const sprite in currentPokemon.sprites) {
        currentPokemon.customSprites.push({
          name: sprite,
          urlPath: currentPokemon.sprites[sprite]
        })
      }
      this.setState({
        currentPokemon,
      })
    });
  };

  render() {
    const { name, currentPokemon } = this.state;

    return (
      <div>
        <input value={name} type='text' onChange={this.nameHandler}/>

        <button onClick={this.pokemonFinder}>Find data!</button>

        {currentPokemon && currentPokemon.customSprites && currentPokemon.customSprites.map(({name, urlPath}) => {
            if(urlPath) {
              return <img key={urlPath} src={urlPath} alt={name} />
            }
        })
        }
      </div>
    )
  }
}

export default PokemonFinder;