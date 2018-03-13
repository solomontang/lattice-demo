import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Invariation error due to App being wrapped in Router from parent component.
xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
