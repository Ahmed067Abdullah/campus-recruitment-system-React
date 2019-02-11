import * as actionTypes from "../actions/actionTypes";

const initialState = {
  uid: "aBuJ4FXc8ag12lk9lNmkzDTGZ472",
  type: "students",
  status: "3",
  name: "Ahmed",
  email: "test1@test.com",
  enrollNo: "",
  phoneNo: "",
  address: "",
  password: "",
  rePassword: "",
  loading: "",
  errorSignup: "",
  errorSignin: "",
  passwordSignin: "123456"
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
    case actionTypes.SIGNIN_SUCCESSFUL:
      const { uid, status, name } = action.payload;
      return {
        ...state,
        uid,
        status,
        name,
        errorSignin: "",
        errorSignup: "",
        loading: false
      };
    case actionTypes.SIGNOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
