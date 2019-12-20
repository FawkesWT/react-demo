import http from '../../server'

// action Type
const FORM_SUBMIT = 'SUBMIT_FORM'

// action
export const submitForm = (data) => (dispatch, getState) => {
  http.post('/submitForm',{}).then(res => {
    dispatch({type: FORM_SUBMIT,data: res.data})
  })
}

// reducer
export default function reducer(state = [], action){
  switch (action.type) {
    default:
      return state
  }
}