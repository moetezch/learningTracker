import axios from 'axios'
import {
   FETCH_USER,ADD_CATEGORY,GET_CATEGORIES,DELETE_CATEGORY,ADD_PROJECT,GET_PROJECTS,DELETE_PROJECT,
   ADD_SESSION,GET_SESSIONS,DELETE_SESSION
} from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

// sessions

export const getSessions=()=>async dispatch=>{
  const res = await axios.get('/api/sessions')
  dispatch({ type: GET_SESSIONS, payload: res.data })
}

export const addSession=values=>async dispatch=>{
  const res = await axios.post('/api/sessions',values)
  dispatch({ type: ADD_SESSION, payload: res.data })
}

export const deleteSession=(id)=>async dispatch =>{
  const res = await axios.delete('/api/sessions/'+id)
  dispatch({ type: DELETE_SESSION, payload: res.data })
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

// Projects



export const getProjects=()=>async dispatch=>{
  const res = await axios.get('/api/projects')
  dispatch({ type: GET_PROJECTS, payload: res.data })
}

export const addProject=values=>async dispatch=>{
  const res = await axios.post('/api/projects',values)
  dispatch({ type: ADD_PROJECT, payload: res.data })
}

export const deleteProject=(id)=>async dispatch =>{
  const res = await axios.delete('/api/projects/'+id)
  dispatch({ type: DELETE_PROJECT, payload: res.data })
}