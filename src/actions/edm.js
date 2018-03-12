import axios from 'axios';
import { SET_PROPERTY_TYPES, SET_ENTITY_TYPES, SET_ASSOCIATION_TYPES, FETCH_ALL_DATA, FETCH_ALL_DATA_SUCCESS, SELECT_MODEL } from './actionTypes';

const fetch = axios.create({
  baseURL: 'https://api.openlattice.com/datastore/edm/'
})

export const selectModel = (id) => ({
  type: SELECT_MODEL,
  id
})

export const setPropertyTypes = (data) => ({
  type: SET_PROPERTY_TYPES,
  data
})

export const setEntityTypes = (data) => ({
  type: SET_ENTITY_TYPES,
  data
})

export const setAssociationTypes = (data) => ({
  type: SET_ASSOCIATION_TYPES,
  data
})

export const fetchBegin = () => ({
  type: FETCH_ALL_DATA
})

export const fetchSuccess = () => ({
  type: FETCH_ALL_DATA_SUCCESS
})

export const fetchAllTypes = () => {
  return (dispatch, getState) => {
    dispatch(fetchBegin());
    Promise.all([
      fetch('/property/type'),
      fetch('/entity/type'),
      fetch('/association/type')
    ])
    .then( res => {
      dispatch(fetchSuccess());
      const propertyTypes = res[0].data;
      const entityTypes = res[1].data;
      const associationTypes = res[2].data;

      dispatch(setPropertyTypes(propertyTypes));
      dispatch(setEntityTypes(entityTypes));
      dispatch(setAssociationTypes(associationTypes));
    })
    .catch(e => {
      console.log(e);
    })
  }
}