import {IS_AUTHENTICATED} from '../actions/index'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return action.auth
    default:
      return state
  }
}

export default reducer