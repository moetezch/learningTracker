import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import categoryReducer from './categoryReducer'
import projectReducer from './projectReducer'
import sessionReducer from './sessionReducer'

export default combineReducers({
  auth:authReducer,
  form:formReducer,
  categories:categoryReducer,
  projects:projectReducer,
  sessions:sessionReducer
})