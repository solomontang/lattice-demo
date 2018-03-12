import { SET_ENTITY_TYPES } from "../actions/actionTypes";

const entityTypes = (state = [], action) => {
  switch(action.type) {
    case SET_ENTITY_TYPES:
      return action.data;
    default: return state;
  }
}

export default entityTypes;