
import {REMOVE_USER, SET_USER} from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case REMOVE_USER:
        return {}
    default:
      return state
  }
}

export default reducer