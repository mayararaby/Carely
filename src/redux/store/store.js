import { configureStore } from '@reduxjs/toolkit'
import {doctorsReducer} from '../reducers/doctorsReducer'

export default configureStore({
  reducer: doctorsReducer,
})