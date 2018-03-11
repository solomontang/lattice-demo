import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import MenuBar from './components/MenuBar';
import CanvasContainer from './containers/CanvasContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <CanvasContainer />
      </div>
    );
  }
}

export default App;
