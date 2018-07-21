import axios from 'axios'
import { FETCH_USER,ADD_CATEGORY,GET_CATEGORIES,DELETE_CATEGORY} from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}
// Categories

export const getCategories=()=>async dispatch=>{
  const res = await axios.get('/api/categories')
  dispatch({ type: GET_CATEGORIES, payload: res.data })
}

export const addCategory=values=>async dispatch=>{
  const res = await axios.post('/api/categories',values)
  dispatch({ type: ADD_CATEGORY, payload: res.data })
}

export const deleteCategory=(id)=>async dispatch =>{
  const res = await axios.delete('/api/categories/'+id)
  dispatch({ type: DELETE_CATEGORY, payload: res.data })
}