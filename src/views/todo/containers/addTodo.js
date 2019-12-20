import { connect } from 'react-redux'
import AddTodo from '../components/addTodo'
import { addTodo } from "../../../redux/modules/todo/todo"
const mapStateToProps = state => {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (id,text) => dispatch(addTodo(id ,text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)