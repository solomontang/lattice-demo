import { SET_PROPERTY_TYPES } from "../actions/actionTypes";

const propertyTypes = (state = [], action) => {
  switch(action.type) {
    case SET_PROPERTY_TYPES:
      return action.data;
    default: return state;
  }
}

export default propertyTypes;