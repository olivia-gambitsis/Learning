import { combineReducers } from 'redux'

import trees from './trees'
import users from './users'

export default combineReducers({
  trees,
  users
})
