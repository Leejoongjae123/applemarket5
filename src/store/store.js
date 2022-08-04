import { configureStore, createSlice } from '@reduxjs/toolkit'

let loggedIn=createSlice({
  name:'loggedIn',
  initialState:'false',
  reducers:{
    changeLoggedIn(state){
      return !state
    }
  }
})

export let {changeLoggedIn}=loggedIn.actions

export default configureStore({
  reducer: {
    loggedIn:loggedIn.reducer
  }
}) 