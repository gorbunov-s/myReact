import React, { PureComponent } from 'react';
import  Preloader from './preLoader';

class Pokemon extends PureComponent {
  render() {
    return (
      <div>
	  
	  { this.props.loading
	  ?
	  <Preloader />

	  : this.props.pokemon.name  && <img className='avatar'src={ this.props.pokemon.avatar } alt={ this.props.pokemon.name  }/>	
	    	
	  }
        <h1 className='blue'>{ this.props.pokemon.name && 'I am '+ this.props.pokemon.name + '!!!!'}</h1>
      </div>
    )
  }
}

export default Pokemon;
