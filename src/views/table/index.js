import { connect } from 'react-redux'
import TableList from './components'
import { upDataTableStart } from '../../redux/modules/table'

const mapStateToProps = state => {
  return {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name'
      },
      {
        title: 'Age',
        dataIndex: 'age'
      },
      {
        title: 'Address',
        dataIndex: 'address'
      },
    ],
    data: state.table
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upDataTable: () => {
      dispatch(upDataTableStart())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableList)