import http from '../../server'

export const submitForm = (data) => (dispatch, getState) => {
  console.log(data)
  http.post('/submitForm',{}).then(res => {
    dispatch({type: 'SUBMIT_FORM',data: res.data})
  })
}