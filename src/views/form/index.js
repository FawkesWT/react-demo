import { connect } from 'react-redux'
import Form from './components'
import { submitForm } from '../../redux/modules/form'

const mapStateToProps = state => {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (data) => {
      dispatch(submitForm(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)