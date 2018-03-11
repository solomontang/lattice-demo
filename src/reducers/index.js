import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import associationTypes from './associationTypes';
import entityTypes from './entityTypes';
import propertyTypes from './propertyTypes';
import isFetching from './isFetching';

const rootReducer = combineReducers({
  associationTypes,
  entityTypes,
  propertyTypes,
  isFetching,
  router: routerReducer
});

export default rootReducer;
