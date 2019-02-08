import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import PersonalInfo from "../../../components/Students/PersonalInfo";
import PersonalInfoForm from "../../../components/Students/PersonalInfoForm";
import EducationTable from "../../../components/Students/EducationTable";
import ExperienceTable from "../../../components/Students/ExperienceTable";
import * as actions from "../../../store/actions/studentsActions";

import Spinner from "./../../../components/Spinner/Spinner";
import Modal from "../../../hoc/Modal";

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
  state = {
    infoModal: false,
    info: {
      name: "",
      dob: "",
      skills: "",
      enrollNo: "",
      introduction: "",
      address: "",
      phone: "",
      github: "",
      linkedin: ""
    }
  };
  componentDidMount() {
    const { getProfile, auth } = this.props;
    getProfile(auth.uid);
  }
  inputChangedHandler = e => {
    const info = { ...this.state.info };
    info[e.target.name] = e.target.value;
    this.setState({ info });
  };
  personalInfoModalHandler = flag => {
    if (flag) {
      const { auth, student } = this.props;
      const { name } = auth;
      const info = { ...student, name };
      this.setState({ info });
    }
    this.setState({ infoModal: flag });
  };
  openEducationModal = index => {
    alert(index);
  };
  openExperienceModal = index => {
    alert(index);
  };
  onSavePersonalInfo = () => {
    const { auth, student, saveProfile } = this.props;
    const { info } = this.state;
    const { uid, email } = auth;
    const updatedStudent = { ...student, ...info, email };
    saveProfile(uid, updatedStudent);
    this.personalInfoModalHandler(false);
  };
  addEducationHandler = () => {};
  addExperienceHandler = () => {};
  deleteEducationHandler = index => {
    alert(index);
  };
  deleteExperienceHandler = index => {
    alert(index);
  };
  render() {
    const { auth, student } = this.props;
    const { infoModal, info } = this.state;
    const { name, email, loading } = auth;
    const {
      age,
      github,
      linkedin,
      introduction,
      skills,
      address,
      phone,
      enrollNo,
      education,
      experience
    } = student;
    const stdudentInfo = [
      { key: "Name", value: name },
      { key: "Enrollment Number", value: enrollNo },
      { key: "Age", value: age },
      { key: "Skills", value: skills },
      { key: "Introduction", value: introduction },
      { key: "Address", value: address },
      { key: "Contact No", value: phone },
      { key: "Email", value: email },
      { key: "Github Handle", value: github },
      { key: "LinkedIn Handle", value: linkedin }
    ];
    return !loading ? (
      <div className="lol">
        <h1 className="main-heading-student-profile">Welcome {name}</h1>
        <div className="student-profile-card-container">
          <PersonalInfo
            stdudentInfo={stdudentInfo}
            onEdit={this.personalInfoModalHandler}
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
          <Modal open={infoModal} handleClose={this.personalInfoModalHandler}>
            <PersonalInfoForm
              info={info}
              inputChangedHandler={this.inputChangedHandler}
              onSubmit={this.onSavePersonalInfo}
            />
          </Modal>
        </div>
      </div>
    ) : (
      <div className="auth-spinner">
        <Spinner />
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
    getProfile: uid => dispatch(actions.getProfile(uid)),
    saveProfile: (uid, payload) => dispatch(actions.saveProfile(uid, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Profile));
