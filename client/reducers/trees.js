

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TREES':
      return action.trees
    default:
      return state
  }
}

export default reducer
