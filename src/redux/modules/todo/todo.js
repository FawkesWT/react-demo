const defaultState = [{
  id: 10000,
  text: '默认值10000',
  completed: true
},{
  id: 10001,
  text: '默认值10001',
  completed: false
}]

// action Type
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (id,text) => (dispatch, getState) => {
  dispatch({ type: ADD_TODO ,id,text})
}

export const toggleTodo = (id) => (dispatch, getState) => {
  dispatch({ type: TOGGLE_TODO ,id})
}

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: true
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos