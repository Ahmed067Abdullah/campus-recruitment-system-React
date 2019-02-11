import React from "react";
import Card from "../../../hoc/Card";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import getTime from '../../../common/getTime';

import "./VacancyList.css";
import "../../../common/ContextMenu.css";

const vacanciesList = props => {
  const { deleteVacancy, editVacancy, vacancies } = props;
  if (vacancies.length > 0) {
    return vacancies.map((vacancy, index) => {
      return (
        <div className="my-vacancies" key={index}>
          <Card>
            <ContextMenuTrigger id={`vacancy-${index}`}>
              <div className="card-text">
                {/* <strong>Reported By</strong> : {vacancy.reportedBy}
              <br /> */}
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">Posted By: {" "}</span>
                  <span className="student-profile-info-val">
                    {vacancy.postedBy}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">Posted At: {" "}</span>
                  <span className="student-profile-info-val">
                    {getTime(vacancy.postedAt)}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">
                    Required Skills:{" "}
                  </span>
                  <span className="student-profile-info-val">
                    {vacancy.skills}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">
                    Minimum GPA:{" "}
                  </span>
                  <span className="student-profile-info-val">
                    {vacancy.gpa}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">
                    Starting Salary:{" "}
                  </span>
                  <span className="student-profile-info-val">
                    {vacancy.salary}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">Details: {" "}</span>
                  <span className="student-profile-info-val">
                    {vacancy.description}
                  </span>
                </p>
              </div>
            </ContextMenuTrigger>
          </Card>
          <ContextMenu id={`vacancy-${index}`} className="ctxMenu">
            <MenuItem
              onClick={() => editVacancy(true, index)}
              className="ctxMenuItem"
            >
              Edit
            </MenuItem>
            <div className="ctxMenuItemDivider" />
            <MenuItem
              onClick={() => deleteVacancy(index)}
              className="ctxMenuItem"
            >
              Delete
            </MenuItem>
          </ContextMenu>
        </div>
      );
    });
  } else {
    return <p className="no-vac-msg">No Vacancies to Show</p>
  }
};

export default vacanciesList;
