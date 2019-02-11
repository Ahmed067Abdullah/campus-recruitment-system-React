import * as actionTypes from "../actions/actionTypes";

const initialState = {
  vacancies: [
    { skills: "Hello", gpa: "4" },
    { skills: "Hello", gpa: "4" },
    { skills: "Hello", gpa: "4" },
    { skills: "Hello", gpa: "4" }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VACANCIES:
      return {
        ...state,
        vacancies: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
