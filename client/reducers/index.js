import { combineReducers } from 'redux'
import taskReducer from './taskReducer'

const everything = combineReducers({
  taskReducer
})

export default everything