import { FETCH_ALL_DATA, FETCH_ALL_DATA_SUCCESS } from '../actions/actionTypes';

const isFetching = (state = false, action) => {
  switch(action.type) {
    case FETCH_ALL_DATA:
      return true;
    case FETCH_ALL_DATA_SUCCESS:
      return false;
    default: return state;
  }
}

export default isFetching;