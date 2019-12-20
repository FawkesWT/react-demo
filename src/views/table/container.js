import { connect } from 'react-redux'
import TableList from './component'
import { upDataTableStart } from './action'

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
    data: state.tableList
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