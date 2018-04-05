import _ from 'lodash';

export const HOME_COLLECTION_REQUESTED = 'homeScreen/HOME_COLLECTION_REQUESTED'
export const HOME_COLLECTION_SUCCESS = 'homeScreen/HOME_COLLECTION_SUCCESS'
export const HOME_COLLECTION_FAILURE = 'homeScreen/HOME_COLLECTION_FAILURE'


const initialState = {
  loading: false,
  loaded: false,
  error: false,
  collectionData:[],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_COLLECTION_REQUESTED: {
      return {
        ...state,
        loading:true,
        loaded:false
      }
    }
    case HOME_COLLECTION_SUCCESS: {
      // console.log('actiion', action.result);
      return {
        ...state,
        loading:false,
        error:false,
        loaded:true,
        collectionData: action.result
      }
    }
    case HOME_COLLECTION_FAILURE: {
      return {
        ...state,
        loading:false,
        error:false,
        loaded:true
      }
    }
    default:
      return state
  }
}


export const fetchHomeCollection = (data) => {
  return {
    types: [HOME_COLLECTION_REQUESTED, HOME_COLLECTION_SUCCESS, HOME_COLLECTION_FAILURE],
    promise: (client) => client.get(`homeCollection`, {
    })
  };
}
