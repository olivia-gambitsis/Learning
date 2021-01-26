import { getTrees } from '../apis/trees'
import {authRef} from '../firebase'


export const SET_USER = 'SET_USER'


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



export function setUser (user) {
  return {
    type: SET_USER,
    user:user
  }
}



export function register (email, password) {
  return dispatch => {authRef.createUserWithEmailAndPassword(email, password)
  .then( user =>{
   dispatch(setUser(
     {userID:user.user.uid,
      email: user.user.email
  }))
  return user
  })
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
  .catch(error =>{
    console.log(error)
  })
  }
}

export function logout () {
  authRef.signOut()
  // .then( userDetails =>{
  //   console.log(userDetails)
  // })
  .catch(error =>{
    console.log(error)
  })
}


