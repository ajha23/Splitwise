import React, { Component } from 'react';
import Splitwise from './main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <h2>Splitwise</h2>
      <Splitwise />
    </div>
    );
  }
}

export default App;
