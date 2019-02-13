import React from "react";
import Card from "../../../hoc/Card";

import getTime from '../../../common/getTime';

import "../../../common/ContextMenu.css";

const companiesList = props => {
  const { companies } = props;
  if (companies.length > 0) {
    return companies.map((company, index) => {
      return (
        <div className="my-vacancies" key={index}>
          <Card>
              <div className="card-text">
                {/* <strong>Reported By</strong> : {vacancy.reportedBy}
              <br /> */}
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">Posted By: {" "}</span>
                  <span className="student-profile-info-val">
                    {company.postedBy}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">Posted At: {" "}</span>
                  <span className="student-profile-info-val">
                    {getTime(company.postedAt)}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">
                    Required Skills:{" "}
                  </span>
                  <span className="student-profile-info-val">
                    {company.skills}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">
                    Minimum GPA:{" "}
                  </span>
                  <span className="student-profile-info-val">
                    {company.gpa}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">
                    Starting Salary:{" "}
                  </span>
                  <span className="student-profile-info-val">
                    {company.salary}
                  </span>
                </p>
                <p className="student-profile-info-container">
                  <span className="student-profile-info-key">Details: {" "}</span>
                  <span className="student-profile-info-val">
                    {company.description}
                  </span>
                </p>
              </div>
          </Card>
          </div>
      );
    });
  } else {
    return <p className="no-vac-msg">No Companies to Show</p>
  }
};

export default companiesList;
