import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import addProductReducer from './reducers/ToDoReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addProductred : addProductReducer,
  },
})