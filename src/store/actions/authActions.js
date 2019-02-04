import { database } from "firebase";
import * as actionTypes from "./actionTypes";
import dispatcher from "../dispater";

export const changeInput = payload =>
  dispatcher(actionTypes.CHANGE_INPUT, payload);

export const signup = () => (dispatch, getState) => {
  console.log("in action", getState().auth);
  // this.setState({ loading: true });
  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(this.state.email, this.state.pass)
  //   .then(res => {
  //     const uid = res.user.uid;
  //     this.setState({ loading: false });
  //     this.props.onLogin(uid);
  //     this.props.history.replace("/register");
  //   })
  //   .catch(error => {
  //     this.setState({ loading: false });
  //     let errorMessage = "";
  //     if (error.code === "auth/email-already-in-use")
  //       errorMessage = "Account For This Email is Already Registered";
  //     else if (error.code === "auth/invalid-email")
  //       errorMessage = "Invalid Email";
  //     else errorMessage = error.message;
  //     this.setState({ error: errorMessage });
  //   });
};

export const signin = () => (dispatch, getState) => {
  // this.setState({ loading: true });
  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(this.state.email, this.state.pass)
  //   .then(res => {
  //     const uid = res.user.uid;
  //     if (uid === "RkpPKqNLeaTeHS5poTCWTJd70fK2") {
  //       this.props.setAdmin();
  //       this.props.onLogin(uid);
  //       this.props.history.replace("/crimes");
  //     } else {
  //       firebase
  //         .database()
  //         .ref(`reporters/${uid}`)
  //         .once("value")
  //         .then(res => {
  //           this.props.onLogin(uid);
  //           if (res.val()) this.props.onSetRegistered(res.val().name);
  //           this.props.history.replace("/register");
  //         })
  //         .catch(err => {
  //           this.setState({ error: err, loading: false });
  //         });
  //     }
  //   })
  //   .catch(error => {
  //     this.setState({ loading: false });
  //     let errorMessage = "";
  //     if (error.code === "auth/wrong-password")
  //       errorMessage = "Wrong Password";
  //     else if (error.code === "auth/user-not-found")
  //       errorMessage = "User Doesn't Exist";
  //     else errorMessage = error.message;
  //     this.setState({ error: errorMessage });
  //   });
};
