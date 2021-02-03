import { combineReducers } from 'redux'

import trees from './trees'
import users from './users'
import isAuthenticated from './isAuthenticated'

export default combineReducers({
  trees,
  users,
  isAuthenticated
})
