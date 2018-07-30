import React, {Component} from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../store'
import { bindActionCreators } from 'redux'

class Counter extends Component {
  increment = () => {
    this.props.incrementCount()
  }

  decrement = () => {
    this.props.decrementCount()
  }

  reset = () => {
    this.props.resetCount()
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.get('count')
})

const mapDispatchToProps = dispatch => ({
  incrementCount: bindActionCreators(incrementCount, dispatch),
  decrementCount: bindActionCreators(decrementCount, dispatch),
  resetCount: bindActionCreators(resetCount, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
