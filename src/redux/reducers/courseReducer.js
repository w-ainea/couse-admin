import * as types from "../actions/actionTypes";
import initialState from './initialState'

// a reducer accepts state and an action then returns new state
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];

    case types.LOAD_COURSES_SUCCESS:
      return action.courses; // replaces values in the state

    default:
      return state;
  }
}
