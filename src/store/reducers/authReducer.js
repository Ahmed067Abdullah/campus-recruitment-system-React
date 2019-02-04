import * as actionTypes from "../actions/actionTypes";

const initialState = {
  type: "std",
  name: "",
  email: "",
  enrollNo: "",
  phoneNo: "",
  address: "",
  password: "",
  rePassword: "",
  loading: "",
  errorSignup: "",
  errorSignin: "",
  passwordSignin: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    default:
      return state;
  }
};

export default reducer;
