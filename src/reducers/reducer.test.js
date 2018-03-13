import reducers from './index';

describe('reducers' , () => {
  test('FETCH_ALL_DATA', () => {
    let state;
    state = reducers({associationTypes:{associationTypes:[],byId:{}},entityTypes:{entityTypes:[],byId:{}},propertyTypes:{propertyTypes:[],byId:{}},isFetching:false,currentModel:null,router:{location:{pathname:'/associationTypes',search:'',hash:'',key:'rg5y8a'}}}, {type:'FETCH_ALL_DATA'});
    expect(state).toEqual({associationTypes:{associationTypes:[],byId:{}},entityTypes:{entityTypes:[],byId:{}},propertyTypes:{propertyTypes:[],byId:{}},isFetching:true,currentModel:null,router:{location:{pathname:'/associationTypes',search:'',hash:'',key:'rg5y8a'}}});
  });
  
  test('FETCH_ALL_DATA_SUCCESS', () => {
    let state;
    state = reducers({associationTypes:{associationTypes:[],byId:{}},entityTypes:{entityTypes:[],byId:{}},propertyTypes:{propertyTypes:[],byId:{}},isFetching:true,currentModel:null,router:{location:{pathname:'/associationTypes',search:'',hash:'',key:'rg5y8a'}}}, {type:'FETCH_ALL_DATA_SUCCESS'});
    expect(state).toEqual({associationTypes:{associationTypes:[],byId:{}},entityTypes:{entityTypes:[],byId:{}},propertyTypes:{propertyTypes:[],byId:{}},isFetching:false,currentModel:null,router:{location:{pathname:'/associationTypes',search:'',hash:'',key:'rg5y8a'}}});
  });
})
