import dispatcher from "../dispater";
import { database } from "firebase";
import * as actionTypes from "./actionTypes";

export const getProfile = uid => dispatch => {
  dispatch(dispatcher(actionTypes.START_LOADING));
  database()
    .ref(`/students/${uid}`)
    .on("value", snapshot => {
      const student = snapshot.val();
      dispatch(dispatcher(actionTypes.SET_STUDENT, student));
      dispatch(dispatcher(actionTypes.STOP_LOADING));
    });
};

export const saveProfile = (uid, payload) => dispatch => {
  delete payload.education;
  delete payload.experience;
  console.log("setting:", payload);
  database()
    .ref(`/students/${uid}`)
    .set(payload)
    .then(() => {
      dispatch(
        dispatcher(actionTypes.CHANGE_INPUT, {
          key: "name",
          value: payload.name
        })
      );
    });
};
