import { database, auth } from "firebase";
import * as actionTypes from "./actionTypes";
import dispatcher from "../dispater";

// helper functions
const loginSuccessful = (dispatch, uid, name, status) => {
  dispatch(
    dispatcher(actionTypes.SIGNIN_SUCCESSFUL, {
      uid,
      name,
      status
    })
  );
};

const loginFailed = dispatch => {
  dispatch(dispatcher(actionTypes.STOP_LOADING));
  console.log("error in sign in after authenticating");
};

// actions
export const changeInput = payload =>
  dispatcher(actionTypes.CHANGE_INPUT, payload);

export const signup = history => (dispatch, getState) => {
  console.log("inside sign up");
  const {
    type,
    name,
    email,
    enrollNo,
    phoneNo,
    address,
    password
  } = getState().auth;

  const newUser = { name, email };
  newUser.disabled = false;
  if (type === "students") {
    console.log("inside students");
    newUser.enrollNo = enrollNo;
  } else if (type === "companies") {
    console.log("inside companies");
    newUser.phoneNo = phoneNo;
    newUser.address = address;
  }
  console.log("creating new");
  dispatch(dispatcher(actionTypes.START_LOADING));
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      const uid = res.user.uid;
      database()
        .ref(`${type}/${uid}`)
        .set(newUser)
        .then(res => {
          console.log("new user added");
          loginSuccessful(dispatch, uid, name, type === "students" ? 2 : 3);
          history.replace("/profile");
        });
    })
    .catch(error => {
      dispatch(dispatcher(actionTypes.STOP_LOADING));
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use")
        errorMessage = "Account For This Email is Already Registered";
      else if (error.code === "auth/invalid-email")
        errorMessage = "Invalid Email";
      else errorMessage = error.message;
      dispatch(dispatcher(actionTypes.SIGNUP_ERROR, { error: errorMessage }));
    });
};

export const signin = history => (dispatch, getState) => {
  const { email, passwordSignin } = getState().auth;
  dispatch(dispatcher(actionTypes.START_LOADING));
  console.log("inside signin");
  auth()
    .signInWithEmailAndPassword(email, passwordSignin)
    .then(res => {
      console.log("signed in");
      const uid = res.user.uid;
      if (uid === "TAaiLOe1CvYB9ohfQtYMWremVHB2") {
        loginSuccessful(dispatch, uid, "Admin", 1);
        console.log("login successful with admin");
        dispatch(dispatcher(actionTypes.SET_ADMIN));
        console.log("re routing");
        history.replace("/students");
      } else {
        database()
          .ref(`students/${uid}`)
          .once("value")
          .then(res => {
            if (res.val()) {
              console.log("login successful with student", res.val());
              let status = 2;
              if (res.val().disabled) status = 4;
              loginSuccessful(dispatch, uid, res.val().name, status);
              console.log("re routing");
              history.replace("/profile");
            } else {
              database()
                .ref(`companies/${uid}`)
                .once("value")
                .then(res => {
                  if (res.val()) {
                    console.log("login successful with companies");
                    let status = 3;
                    if (res.val().disabled) status = 4;
                    loginSuccessful(dispatch, uid, res.val().name, status);
                    history.replace("/profile");
                  }
                })
                .catch(err => {
                  loginFailed(dispatch);
                });
            }
          })
          .catch(err => {
            loginFailed(dispatch);
          });
      }
    })
    .catch(error => {
      console.log("not signed in");
      dispatch(dispatcher(actionTypes.STOP_LOADING));
      let errorMessage = "";
      if (error.code === "auth/wrong-password") errorMessage = "Wrong Password";
      else if (error.code === "auth/user-not-found")
        errorMessage = "User Doesn't Exist";
      else errorMessage = error.message;
      dispatch(dispatcher(actionTypes.SIGNIN_ERROR, { error: errorMessage }));
    });
};

export const signout = () => dispatcher(actionTypes.SIGNOUT);
