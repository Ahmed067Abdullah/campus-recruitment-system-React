import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  openPersonalInfoModal = () => {};
  openEducationModal = (index) => {
    alert(index)
  };
  openExperienceModal = (index) => {
    alert(index)
  };
  editPersonalInfoHandler = () => {};
  addEducationHandler = () => {
    
  };
  addExperienceHandler = () => {};
  educationContextMenuHandler = () => {
    alert("hrello world");
  };
  deleteEducationHandler = index => {
    alert(index);
  };
  deleteExperienceHandler = index => {
    alert(index);
  };
  render() {
    const { auth, student, classes } = this.props;
    const { name, emailSignin } = auth;
    const {
      age,
      github,
      linkedin,
      introduction,
      skills,
      address,
      phone,
      education,
      experience
    } = student;
    const stdudentInfo = [
      { key: "Name", value: name },
      { key: "Age", value: age },
      { key: "Skills", value: skills },
      { key: "Introduction", value: introduction },
      { key: "Address", value: address },
      { key: "Contact No", value: phone },
      { key: "Email", value: emailSignin },
      { key: "Github", value: github },
      { key: "LinkedIn", value: linkedin }
    ];
    return (
      <div className="lol">
        <h1 className="main-heading-student-profile">Welcome {name}</h1>
        <div className="student-profile-card-container">
          <PersonalInfo
            stdudentInfo={stdudentInfo}
            onEdit={this.personalInfoEditHandler}
          />
        </div>
        <div className="student-profile-education-container">
          <EducationTable
            education={education}
            contextMenu={this.educationContextMenuHandler}
            editEducation={this.openEducationModal}
            deleteEducation={this.deleteEducationHandler}
          />
          <Button
            variant="contained"
            className="add-eduEx-button"
            onClick={this.addEducation}
          >
            Add Education
          </Button>
        </div>
        <div className="student-profile-experience-container">
          <ExperienceTable 
            experience={experience} 
            editExperience={this.openExperienceModal}
            deleteExperience={this.deleteExperienceHandler}
          />
          <Button
            variant="contained"
            className="add-eduEx-button"
            onClick={this.addExperience}
          >
            Add Experience
          </Button>
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
