import * as actionTypes from "../actions/actions"
import { doctors } from "../../../__mocks__/doctors"

const initialState = {
  doctors
}

export const doctorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DOCTORES_INFO:
      return {
        ...state,
        doctors: payload
      }
    default:
      return state
  }
}