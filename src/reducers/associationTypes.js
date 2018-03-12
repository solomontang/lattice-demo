import { SET_ASSOCIATION_TYPES } from "../actions/actionTypes";

const associationTypes = (state = [], action) => {
  switch(action.type) {
    case SET_ASSOCIATION_TYPES:
      return action.data
    default: return state;
  }
}

export default associationTypes;