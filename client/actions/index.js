import { getTrees } from '../apis/trees'
import {authRef} from '../firebase'


export const SET_USER = 'SET_USER'
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED'
export const REMOVE_USER = 'REMOVE_USER'
export const AUTHENTICATION_HAS_LOADED = 'AUTHENTICATION_HAS_LOADED'


export function setTrees (trees) {
  return {
    type: 'SET_TREES',
    trees
  }
}

export function fetchTrees () {
  return dispatch => {
    return getTrees()
      .then(trees => {
        dispatch(setTrees(trees))
        return null
      })
  }
}

export const isAuthenticated = (boolean) => {
  return {
    type: IS_AUTHENTICATED,
    auth: boolean  
  }
}

export const authIsLoaded = (boolean) => {
  return {
    type: AUTHENTICATION_HAS_LOADED,
    loaded: boolean
  }
}


export function setUser (user) {
  return {
    type: SET_USER,
    user:user
  }
}

export const removeUser = () => {
  console.log('removeUser')
  return {
    type: REMOVE_USER,
  }
}



export function register (email, password) {
  return dispatch => {authRef.createUserWithEmailAndPassword(email, password)
  .then( user =>{
   dispatch(setUser(
     {userID:user.user.uid,
      email: user.user.email,
  }))
  })
  .then(()=> dispatch(isAuthenticated(true)))
  .catch(error =>{
    console.log(error)
  })
  }
}

export function login (email, password) {
  return dispatch => {
    authRef.signInWithEmailAndPassword(email, password)
    .then(user =>{
      dispatch(setUser({
        userID:user.user.uid,
        email:user.user.email
      }))
  })
  .then(()=> dispatch(isAuthenticated(true)))
  .then(()=> dispatch(authIsLoaded(true)))
  .catch(error =>{
    console.log(error)
  })
  }
}

export const fetchUser = () => {
  return dispatch => {
    authRef.onAuthStateChanged(user => {
      if(user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
        }))
        dispatch(isAuthenticated(true))
      } else {
      }dispatch(authIsLoaded(true))
    })
  }
}




export function logout () {
  return dispatch => {
    authRef.signOut()
    .then(() => dispatch(isAuthenticated(null)))
    .then (() => dispatch(removeUser({})))
    .then(() => dispatch(authIsLoaded(false)))
  }
}


