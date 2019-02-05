import * as actionTypes from "../actions/actionTypes";

const initialState = {
  uid : "",
  type: "students",
  status: "",
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
  emailSignin : "",
  passwordSignin: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT:
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value
      };
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case actionTypes.SIGNIN_ERROR:
      return {
        ...state,
        errorSignin: action.payload.error
      };
    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        errorSignup: action.payload.error
      };
    case actionTypes.LOGIN_SUCCESSFUL:
      const { uid, status } = action.payload;
      return {
        ...state,
        uid,
        status,
        errorSignin : "",
        errorSignup : "",
        loading : false
      };
    default:
      return state;
  }
};

export default reducer;
