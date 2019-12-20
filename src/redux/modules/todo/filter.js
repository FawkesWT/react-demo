import lodash from "lodash"

const VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SHOW_ALL = "SHOW_ALL"
const SHOW_ACTIVE = "SHOW_ACTIVE"
const SHOW_KILL = "SHOW_KILL"

export const filteredTodo = (filter) => (dispatch, getState) => {
  dispatch({ type: VISIBILITY_FILTER ,filter})
}

// reducers
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter

export const getVisiblityTodo = (todos,filter) => {
  switch(filter){
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return lodash.filter(todos,{completed: true})
    case SHOW_KILL:
      return lodash.filter(todos,{completed: false})
    default :
      return todos
  }
}