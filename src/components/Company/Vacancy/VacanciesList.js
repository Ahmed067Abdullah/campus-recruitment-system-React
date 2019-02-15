import React from "react";
import { Link } from "react-router-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import Card from "../../../hoc/Card";
import { getTime, getDate } from "../../../common/timeHelperFunctions";

import "./VacancyList.css";
import "../../../common/ContextMenu.css";

const clickedHandler = (e, owner) => {
  if (owner) e.preventDefault();
};

const vacanciesList = props => {
  const { deleteVacancy, editVacancy, vacancies, owner, admin } = props;
  if (vacancies.length > 0) {
    const vacancyInfoArray = vacancies.map(vacancy => [
      { key: "Posted By", value: vacancy.postedBy },
      { key: "Posted At", value: getTime(vacancy.postedAt) },
      { key: "Last Date to Apply", value: getDate(vacancy.lastDate) },
      { key: "Required Skills", value: vacancy.skills },
      { key: "Minimum CGPA", value: vacancy.gpa },
      { key: "Starting Salary", value: vacancy.salary },
      { key: "Details", value: vacancy.description }
    ]);

    return vacancyInfoArray.map((vacancyInfo, index) => {
      return (
        <div className="my-vacancies" key={index}>
          <Link
            to={`/profile/${vacancies[index].postedById}`}
            onClick={e => clickedHandler(e, admin || owner)}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <ContextMenuTrigger id={`vacancy-${index}`}>
                <div className="card-text" style={{ position: "relative" }}>
                  {vacancyInfo.map(info => (
                    <p
                      className="student-profile-info-container"
                      key={info.key}
                    >
                      <span className="student-profile-info-key">
                        {info.key}:{" "}
                      </span>
                      <span className="student-profile-info-val">
                        {info.value}
                      </span>
                    </p>
                  ))}
                </div>
              </ContextMenuTrigger>
            </Card>
          </Link>
          {owner ? (
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
          ) : (
            ""
          )}
        </div>
      );
    });
  } else {
    return <p className="no-vac-msg">No Vacancies to Show</p>;
  }
};

export default vacanciesList;
