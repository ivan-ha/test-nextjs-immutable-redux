import {connect} from 'react-redux'
import Clock from './clock'
import Counter from './counter'

function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

const mapStateToProps = state => ({
  lastUpdate: state.get('lastUpdate'),
  light: state.get('light')
})

export default connect(mapStateToProps)(Examples)
