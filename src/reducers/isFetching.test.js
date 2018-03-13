import reducers from './isFetching';

describe('isFetching', () => {
  it('FETCH_ALL_DATA to yield true', () => {
    let result;
    result = reducers({}, {type:'FETCH_ALL_DATA'});
    expect(result).toEqual(true);
  })
  
  it('FETCH_ALL_DATA_SUCCESS to yield false', () => {
    let result;
    result = reducers({}, {type:'FETCH_ALL_DATA_SUCCESS'});
    expect(result).toEqual(false);
  })
})