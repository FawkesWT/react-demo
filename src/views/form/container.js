import { connect } from 'react-redux'
import Form from './component'

import { submitForm } from './action'

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