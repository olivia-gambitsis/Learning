import { getTrees } from '../apis/trees'



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