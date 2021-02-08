import {AUTHENTICATION_HAS_LOADED} from '../actions/authenticated'


const intialState = {authHasLoaded: false}

const reducer = (state = intialState, action) => {
  switch(action.type){
    case AUTHENTICATION_HAS_LOADED:
      let authState = {...state}
      authState.authHasLoaded = action.loaded
      return authState
    default:
      return state
  }
}

export default reducer