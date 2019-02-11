import dispatcher from "../dispater";
import { database } from "firebase";
import * as actionTypes from "./actionTypes";

export const getProfile = uid => dispatch => {
  dispatch(dispatcher(actionTypes.START_LOADING));
  database()
    .ref(`/companies/${uid}`)
    .on("value", snapshot => {
      const company = snapshot.val();
      dispatch(dispatcher(actionTypes.SET_COMPANY, company));
      dispatch(dispatcher(actionTypes.STOP_LOADING));
    });
};

export const saveProfile = (uid, payload) => dispatch => {
  console.log("setting:", payload);
  database()
    .ref(`/companies/${uid}`)
    .set(payload);
};

export const saveVacancies = (uid, payload) => dispatch => {
  console.log("updating Vacancies:", payload);
  database()
    .ref(`/companies/${uid}/vacancies`)
    .set(payload);
};
