import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import * as actions from "../../../store/actions/studentsActions";
import PersonalInfo from "../../../components/Students/PersonalInfo/PersonalInfo";

import Spinner from "./../../../components/Spinner/Spinner";

import { getAge } from "../../../common/timeHelperFunctions";

import "./Students.css";

class Students extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const { auth, students } = this.props;
    const { loading } = auth;

    const studentsInfoArray = students.students.map(student => [
      { key: "Name", value: student.name },
      { key: "Age", value: getAge(student.dob) },
      { key: "Skills", value: student.skills },
      { key: "Current CGPA", value: student.cgpa },
      { key: "Introduction", value: student.introduction },
      { key: "Address", value: student.address },
      { key: "Contact No", value: student.phone },
      { key: "Email", value: student.email },
      { key: "Github Handle", value: student.github },
      { key: "LinkedIn Handle", value: student.linkedin }
    ]);
    return !loading ? (
      <div className="lol">
        <h1 className="main-heading-student-profile">Registered Students</h1>

        <div className="company-vacancies-container" style={{ width: "100%" }}>
          {studentsInfoArray.map((studentInfo, index) => (
            <div className="stds-list-info-container" key={index}>
              <Link
                to={`/profile/${students.students[index].id}`}
                style={{ textDecoration: "none" }}
              >
                <PersonalInfo info={studentInfo} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="profile-spinner">
        <Spinner />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStudents: () => dispatch(actions.getStudents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
