import * as actionTypes from "../actions/actionTypes";

const initialState = {
  name: "",
  operatingSince: "",
  phoneNo: "",
  facebook: "",
  website: "",
  introduction: "",
  address: "",
  vacancies : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMPANY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reducer;
