// Example for use: <H1 className={'example'} text={'Welcome to React'} />
import React from 'react';

class H1 extends React.Component {
  render() {
    const { color, text } = this.props;

    return <h1 className={ color }>Hello, { text }</h1>
  }
}

export default H1;