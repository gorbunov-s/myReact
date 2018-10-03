// Example for use: <H1 className={'example'} text={'Welcome to React'} />
import React from 'react';

class H1 extends React.Component {
  render() {
    return <h1 className={this.props.color}>Hello, {this.props.text}</h1>
  }
}
export default H1;