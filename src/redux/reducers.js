import { combineReducers } from 'redux'
import table from './modules/table'
import form from './modules/form'
import todo from './modules/todo'

const reducers = combineReducers({
  table,
  form,
  ...todo
})

export default reducers