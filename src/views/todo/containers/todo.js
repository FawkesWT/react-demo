import { connect } from 'react-redux'
import TodoList from '../components/todo'
import { toggleTodo } from "../../../redux/modules/todo/todo"
import { getVisiblityTodo } from "../../../redux/modules/todo/filter"

const mapStateToProps = state => {
  return {
    todos: getVisiblityTodo(state.todos,state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)