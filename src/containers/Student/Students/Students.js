import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/studentsActions";
import { blockAccount } from "../../../store/actions/authActions";

import PersonalInfo from "../../../components/Students/PersonalInfo/PersonalInfo";
import BlockIcon from "../../../components/BlockIcon/BlockIcon";
import Spinner from "./../../../components/Spinner/Spinner";

// helper functions
import { getAge } from "../../../common/timeHelperFunctions";
import navigationHandler from "../../../common/navigationHandler";

import "./Students.css";

class Students extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  onBlock = uid => {
    this.props.blockAccount(uid);
  };

  render() {
    const { auth, students } = this.props;
    const { loading, admin } = auth;

    const studentsInfoArray = students.students.map(student => [
      { key: "Name", value: student.name },
      { key: "Age", value: getAge(student.dob) },
      { key: "Department", value: student.dept },
      { key: "Current CGPA", value: student.cgpa },
      { key: "Skills", value: student.skills },
      { key: "Introduction", value: student.introduction },
      { key: "Address", value: student.address },
      { key: "Contact No", value: student.phone },
      { key: "Email", value: student.email },
      { key: "Github Handle", value: student.github },
      { key: "LinkedIn Handle", value: student.linkedin }
    ]);
    return !loading ? (
      <div className="lol">
        <h1 className="main-heading-companies">Registered Students</h1>

        <div className="company-vacancies-container" style={{ width: "100%" }}>
          {studentsInfoArray.length > 0 ? (
            studentsInfoArray.map((studentInfo, index) => {
              const id = students.students[index].id;
              return (
                <div className="stds-list-info-container" key={index}>

                  {/* don't navigate if owner, admin or visitor clicks on card */}
                  <Link
                    to={`/profile/${id}`}
                    onClick={e => navigationHandler(e, admin)}
                    style={{ textDecoration: "none" }}
                  >

                    {/* show block icon for admin only */}
                    {admin ? <BlockIcon onBlock={this.onBlock} id={id} /> : ""}
                    <PersonalInfo info={studentInfo} />
                  </Link>
                </div>
              );
            })
          ) : (
            <h1 className="blocked-msg">No Students to Show.</h1>
          )}
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
    getStudents: () => dispatch(actions.getStudents()),
    blockAccount: uid => dispatch(blockAccount("students", uid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
