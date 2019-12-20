import http from '../../server'

const TableData_UPDATA = "UPDATA_TABLE_RESPONSE"

export const upDataTableStart = () => (dispatch, getState) => {
  http.get('/getTableList').then(res => {
    dispatch({type: TableData_UPDATA,data: res.data})
  })
}

export default function reducer(state = [], action){
  switch (action.type) {
    case TableData_UPDATA:
      return action.data
    default:
      return state
  }
}