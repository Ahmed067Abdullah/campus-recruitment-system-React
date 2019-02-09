import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dob: "",
  cgpa : "",
  name: "",
  github: "",
  phone: "",
  enrollNo: "",
  linkedin: "",
  introduction: "",
  address: "",
  skills: "",
  education: [],
  experience: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STUDENT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
