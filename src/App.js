import React, { Component } from 'react';

import MenuBar from './components/MenuBar';
import EDMContainer from './containers/EDMContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <EDMContainer />
      </div>
    );
  }
}

export default App;
