import React from 'react'

const Counter = (props) => {
  return (
    <div key={props.index}>
      <h1>{props.count}</h1>
      <h1>{props.name}</h1>
      <button onClick={ () => props.decrement(5) }>Down</button>
      <button onClick={ () => props.increment(5) }>Up</button>
      <button onClick={ () => props.reset(0) }>Reset</button>
    </div>
  )
}

export default Counter
