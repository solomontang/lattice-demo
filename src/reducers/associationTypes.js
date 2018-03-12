import { SET_ASSOCIATION_TYPES } from "../actions/actionTypes";
import { combineReducers } from 'redux';

const mapById = (data) => {
  return data.reduce( (map, model, id) => {
    map[model.entityType.id] = id;
    return map;
  }, {})
}

const associations = (state = [], action) => {
  switch(action.type) {
    case SET_ASSOCIATION_TYPES:
      return action.data
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case SET_ASSOCIATION_TYPES:
      return mapById(action.data);
    default:
      return state;
  }
}

const associationTypes = combineReducers({
  associationTypes: associations,
  byId
})

export default associationTypes;