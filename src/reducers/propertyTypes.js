import { SET_PROPERTY_TYPES } from "../actions/actionTypes";
import { combineReducers } from 'redux';

const mapById = (data) => {
  return data.reduce( (map, model, id) => {
    map[model.id] = id;
    return map;
  }, {});
}

const properties = (state = [], action) => {
  switch(action.type) {
    case SET_PROPERTY_TYPES:
      return action.data;
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case SET_PROPERTY_TYPES:
      return mapById(action.data);
    default:
      return state;
  }
}

const propertyTypes = combineReducers({
  propertyTypes: properties,
  byId
})

export default propertyTypes;