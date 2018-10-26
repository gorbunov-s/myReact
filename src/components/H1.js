// Example for use: <H1 className={'example'} text={'Welcome to React'} />
import React from 'react';
import '../App.css';
class H1 extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
	this.state = {
		text: '',
		color: 'red',	
	}
  }

 componentDidMount() {
    document.addEventListener('click', this.onInputClick, true);
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.onInputClick, true);
  }

  onInputClick = (e) => {
    if (this.h1.contains(e.target)){
      alert('Click');
      this.input.current.focus();
    }
  };
  typeText = (e) => {
	  this.setState({
		  text: e.target.value
	  });
  }

  render() {
    const { color, text } = this.props;
    //console.log('render H1', this.input);


    return (
      <>

        <h1 className={ color } ref={ (el) => this.h1 = el}>Hello, { this.state.text }</h1>

        <input type={'text'} value={text} ref={ this.input } onChange={this.typeText}/>
      </>
    )
  }
}

export default H1;