import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Card from "../../../hoc/Card";
import PersonalInfo from "../../../components/Students/PersonalInfo";
import EducationTable from "../../../components/Students/EducationTable";
import ExperienceTable from "../../../components/Students/ExperienceTable";
import * as actions from "../../../store/actions/studentsActions";

import "./Profile.css";

const styles = theme => {
  return {
    TextFields: {
      marginBottom: "20px",
      width: "95%"
    },
    button: {
      margin: theme.spacing.unit,
      marginBottom: "10px",
      backgroundColor: "#1f4f16",
      color: "white"
    },
    authMessage: {
      textDecoration: "underline",
      cursor: "pointer"
    }
  };
};

class Profile extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  personalInfoEditHandler = () => {
    console.log("edit info");
  };
  render() {
    const { auth, student, classes } = this.props;
    const { name, emailSignin } = auth;
    const {
      age,
      github,
      linkedin,
      introduction,
      address,
      phone,
      education,
      experience
    } = student;
    const stdudentInfo = [
      { key: "Name", value: name },
      { key: "Age", value: age },
      { key: "Introduction", value: introduction },
      { key: "Address", value: address },
      { key: "Contact No", value: phone },
      { key: "Email", value: emailSignin },
      { key: "Github", value: github },
      { key: "LinkedIn", value: linkedin }
    ];
    return (
      <div>
        <h1 className="main-heading-student-profile">Welcome {name}</h1>
        <div className="student-profile-card-container">
          <PersonalInfo
            stdudentInfo={stdudentInfo}
            onEdit={this.personalInfoEditHandler}
          />
        </div>
        <div className="student-profile-education-container">
          <EducationTable education={education} />
        </div>
        <div className="student-profile-experience-container">
          <ExperienceTable experience={experience} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    student: state.student
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(actions.getProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Profile));
