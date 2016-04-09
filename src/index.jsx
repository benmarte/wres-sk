import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>It works!</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));