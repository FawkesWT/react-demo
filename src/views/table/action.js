import http from '../../server'

export const upDataTableStart = () => (dispatch, getState) => {
  http.get('/getTableList').then(res => {
    dispatch({type: 'UPDATA_TABLE_RESPONSE',data: res.data})
  })
}