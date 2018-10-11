import React, { PureComponent } from 'react';

class Pokemon extends PureComponent {
  render() {
    return (
      <div>
        <img src={ this.props.pokemon.avatar } alt={ this.props.pokemon.name  }/>
        <h1>{ this.props.pokemon.name }</h1>
      </div>
    )
  }
}

export default Pokemon;
