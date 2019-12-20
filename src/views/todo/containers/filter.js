import { connect } from 'react-redux'
import Filter from '../components/filter'
import { filteredTodo } from '../../../redux/modules/todo/filter'

const mapStateToProps = state => {
  return {
    filter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    visibilityFilter: (filter) => dispatch(filteredTodo(filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)