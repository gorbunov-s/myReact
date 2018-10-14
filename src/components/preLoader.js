import React, {Component} from 'react';
import imgPreloader from '../reload.png';

class Preloader extends Component {
	
	render() {
		return (
			<img className='App-logo' src={ imgPreloader } />
		)
	}
}
export default Preloader;