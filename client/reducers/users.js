
import {SET_USER} from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}

export default reducer