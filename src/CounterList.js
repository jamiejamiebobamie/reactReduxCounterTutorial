import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actions'
import Counter from './Counter'

class CounterList extends Component{


render(){
    return (
      <div>
        {this.props.counters.map((counter, i) => {
          return (
            <Counter
              count={counter.value}
              name={counter.name}
              index={i}
              increment={() => this.props.increment(i, 4)}
              decrement={() => this.props.decrement(i, 4)}
              reset={() => this.props.reset(i, 0)}
            />)
        })}
      </div>
    )

}
}

const mapStateToProps = (state) => {
  return { counters: state.counters }
}

const mapDispatchToProps = () => {
  return { increment, decrement, reset }
}

export default connect(mapStateToProps, mapDispatchToProps())(CounterList)

// const intermediatefunction =  connect(mapStateToProps, mapDispatchToProps())
// const finalComponent = intermediatefunction(CounterList)
// export default finalComponent
