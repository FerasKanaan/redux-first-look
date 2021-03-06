const initialState = {
  likes: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state = {...state, likes: state.likes + 1}
    case 'DECREMENT':
      return state = {...state, likes: state.likes - 1}
    default:
      return state
  }
}