import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCESS, authors };
}

// loadCourses thunk
export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}