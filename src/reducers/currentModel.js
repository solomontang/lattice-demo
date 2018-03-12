import { SELECT_MODEL } from '../actions/actionTypes';

const currentModel = (state = null, action) => {
  switch(action.type) {
    case SELECT_MODEL:
      return action.id;
    default:
      return state;
  }
}

export default currentModel;