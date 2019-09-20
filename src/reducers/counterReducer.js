import { INCREMENT, DECREMENT, RESET, NEW_COUNTER } from '../actions'

const counterReducer = (state = [], action) => {
  switch(action.type) {
    case INCREMENT:
        return state.map((counter, i) => {
            if (action.payload.index === i) {
                counter.value += 1
            }
            return counter
        })

    case DECREMENT:
        return state.map((counter, i) => {
            if (action.payload.index === i) {
                counter.value -= 1
            }
            return counter
        })

      case NEW_COUNTER:
        const newState = [...state, {name: action.payload.name, value: 0}]
        return newState

    case RESET:
      newState[action.payload.index] = action.payload.val
      return newState
    default:
      return state

  }
}

export default counterReducer
