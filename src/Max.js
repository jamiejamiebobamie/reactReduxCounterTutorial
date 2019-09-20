import React, { Component } from 'react';
import { connect } from 'react-redux';

class Max extends Component {

    render(){
        const values = this.props.counters.map((counter) => counter.value)

        return (
            <div>
                {values.length ? 'Max: ' + Math.max(...values) : 'Max: 0'}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }

}

export default connect(mapStateToProps)(Max)
