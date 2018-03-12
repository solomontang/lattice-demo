import { SET_ENTITY_TYPES } from "../actions/actionTypes";
import { combineReducers } from 'redux';

const mapById = (data) => {
  return data.reduce( (map, model, id) => {
    map[model.id] = id;
    return map;
  }, {});
}

const entities = (state = [], action) => {
  switch(action.type) {
    case SET_ENTITY_TYPES:
      return action.data;
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case SET_ENTITY_TYPES:
      return mapById(action.data);
    default:
      return state;
  }
}

const entityTypes = combineReducers({
  entityTypes: entities,
  byId
})

export default entityTypes;