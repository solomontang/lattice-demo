import { SELECT_MODEL, LOCATION_CHANGE } from '../actions/actionTypes';

const currentModel = (state = null, action) => {
  switch(action.type) {
    case SELECT_MODEL:
      return action.id;
    case LOCATION_CHANGE:
      return null;
    default:
      return state;
  }
}

export default currentModel;