// a reducer accepts state and an action then returns new state
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];

    default:
      return state;
  }
}
