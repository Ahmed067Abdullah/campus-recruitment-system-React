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

export const getVacancies = () => dispatch => {
  dispatch(dispatcher(actionTypes.START_LOADING));
  database()
    .ref(`/companies/`)
    .on("value", snapshot => {
      const vacanciesObj = snapshot.val();
      let vacancies = [];
      for (let key in vacanciesObj) {
        const vacs = vacanciesObj[key].vacancies;
        for (let vac in vacs)
          vacancies.push({
            postedById: key,
            postedBy: vacanciesObj[key].name,
            ...vacs[vac]
          });
      }
      console.log(vacancies);
      dispatch(dispatcher(actionTypes.SET_VACANCIES, vacancies));
      dispatch(dispatcher(actionTypes.STOP_LOADING));
    });
};

export const getCompanies = () => dispatch => {
  dispatch(dispatcher(actionTypes.START_LOADING));
  database()
    .ref(`/companies/`)
    .on("value", snapshot => {
      const companiesObj = snapshot.val();
      let companies = [];
      for (let key in companiesObj)
        companies.push({ id: key, ...companiesObj[key] });
      console.log(companies);
      dispatch(dispatcher(actionTypes.SET_COMPANIES, companies));
      dispatch(dispatcher(actionTypes.STOP_LOADING));
    });
};
