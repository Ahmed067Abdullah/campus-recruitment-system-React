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
  console.log("setting:", payload);
  database()
    .ref(`/students/${uid}`)
    .set(payload);
};

export const saveEduExp = (uid, payload, field) => dispatch => {
  console.log("updating edu/exp:", payload, field);
  database()
    .ref(`/students/${uid}/${field}`)
    .set(payload);
};

export const getStudents = () => dispatch => {
  dispatch(dispatcher(actionTypes.START_LOADING));
  database()
    .ref(`/students/`)
    .on("value", snapshot => {
      const studentsObj = snapshot.val();
      let students = [];
      for (let key in studentsObj)
      students.push({ id: key, ...studentsObj[key] });
      console.log(students);
      dispatch(dispatcher(actionTypes.SET_STUDENTS, students));
      dispatch(dispatcher(actionTypes.STOP_LOADING));
    });
};

