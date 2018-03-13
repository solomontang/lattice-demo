import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import EDMContainer from './containers/EDMContainer';

const entityContainer = () => (
  <EDMContainer modelType='EntityTypes' />
)

const associationContainer = () => (
  <EDMContainer modelType='AssociationTypes' />
)

const App = () => (
  <div className="App">
    <MenuBar />
    <Switch>
      <Route path='/entityTypes' render={entityContainer}/>
      <Route path='/associationTypes' render={associationContainer}/>
      <Redirect to='/entityTypes'/>
    </Switch>
  </div>
);

export default App;
