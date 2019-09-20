const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const NEW_COUNTER = 'NEW_COUNTER'

const reset = (index, val = 0) => {
  return { type: RESET, payload: { index, val } }
}

const increment = (index, val = 1) => {
  return {
    type: INCREMENT,
    payload: { index, val }
  }
}

const decrement = (index, val = 1) => {
  return {
    type: DECREMENT,
    payload: { index, val }
  }
}

const newCounter = (name) => {
  return {
    type: NEW_COUNTER,
    payload: { name }
  }
}

export { INCREMENT, DECREMENT, RESET, NEW_COUNTER, increment, decrement, reset, newCounter }
