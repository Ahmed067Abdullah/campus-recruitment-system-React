import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import PersonalInfo from "../../../components/Students/PersonalInfo/PersonalInfo";
import PersonalInfoForm from "../../../components/Students/PersonalInfo/PersonalInfoForm";

import EducationTable from "../../../components/Students/Education/EducationTable";
import EducationForm from "../../../components/Students/Education/EducationForm";

import ExperienceTable from "../../../components/Students/Experience/ExperienceTable";
import ExperienceForm from "../../../components/Students/Experience/ExperienceForm";

import * as actions from "../../../store/actions/studentsActions";
import getAge from "../../../common/getAge";

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
    eduModal: false,
    expModal: false,
    eduEditIndex: "",
    expEditIndex: "",
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
    },
    educationForm: {
      institute: "",
      degree: "",
      from: "",
      to: ""
    },
    experienceForm: {
      company: "",
      position: "",
      from: "",
      to: ""
    }
  };

  componentDidMount() {
    const { getProfile, auth } = this.props;
    getProfile(auth.uid);
  }

  inputChangedHandler = (e, form) => {
    const { name, value } = e.target;
    if (form === "info") {
      const info = { ...this.state.info };
      info[name] = value;
      this.setState({ info });
    } else if (form === "edu") {
      const educationForm = { ...this.state.educationForm };
      educationForm[name] = value;
      this.setState({ educationForm });
    } else if (form === "exp") {
      const experienceForm = { ...this.state.experienceForm };
      experienceForm[name] = value;
      this.setState({ experienceForm });
    }
  };

  // info func
  personalInfoModalHandler = flag => {
    if (flag) {
      const info = { ...this.props.student };
      this.setState({ info });
    }
    this.setState({ infoModal: flag });
  };

  onSavePersonalInfo = () => {
    const { auth, student, saveProfile } = this.props;
    const { info } = this.state;
    const { uid, email } = auth;
    const updatedStudent = { ...student, ...info, email };

    saveProfile(uid, updatedStudent);
    this.personalInfoModalHandler(false);
  };

  // edu func
  educationModalHandler = (flag, index = "") => {
    if (index) {
    }
    this.setState({ eduModal: flag });
  };

  onSaveEducation = () => {
    const { eduEditIndex, educationForm } = this.state;
    const { auth, student, saveEdu } = this.props;
    const { education } = student;

    if (eduEditIndex) education[eduEditIndex] = educationForm;
    else education.push(educationForm);

    saveEdu(auth.uid, education);
    this.setState({
      educationForm: {
        institute: "",
        degree: "",
        from: "",
        to: ""
      },
      eduEditIndex: ""
    });
    this.educationModalHandler(false);
  };

  deleteEducationHandler = index => {
    alert(index);
  };

  // exp func
  experienceModalHandler = (flag, index = "") => {
    if (index) {
    }
    this.setState({ expModal: flag });
  };

  onSaveExperience = () => {
    const { expEditIndex, experienceForm } = this.state;
    const { auth, student, saveExp } = this.props;
    const { experience } = student;

    if (expEditIndex) experience[expEditIndex] = experienceForm;
    else experience.push(experienceForm);

    saveExp(auth.uid, experience);
    this.setState({
      experienceForm: {
        company: "",
        position: "",
        from: "",
        to: ""
      },
      expEditIndex: ""
    });
    this.experienceModalHandler(false);
  };

  deleteExperienceHandler = index => {
    alert(index);
  };

  render() {
    const { auth, student } = this.props;
    const {
      infoModal,
      info,
      eduModal,
      educationForm,
      expModal,
      experienceForm
    } = this.state;
    const { email, loading } = auth;
    const {
      name,
      dob,
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
      { key: "Age", value: getAge(dob) },
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

        {/* profile componenets */}
        <div className="student-profile-card-container">
          <PersonalInfo
            stdudentInfo={stdudentInfo}
            onEdit={this.personalInfoModalHandler}
          />
        </div>
        <Modal open={infoModal} handleClose={this.personalInfoModalHandler}>
          <PersonalInfoForm
            info={info}
            inputChangedHandler={this.inputChangedHandler}
            onSubmit={this.onSavePersonalInfo}
          />
        </Modal>

        {/* education componenets */}
        <div className="student-profile-education-container">
          <EducationTable
            education={education}
            contextMenu={this.educationContextMenuHandler}
            editEducation={this.educationModalHandler}
            deleteEducation={this.deleteEducationHandler}
          />
          <Button
            variant="contained"
            className="add-eduEx-button"
            onClick={() => this.educationModalHandler(true)}
          >
            Add Education
          </Button>
        </div>
        <Modal open={eduModal} handleClose={this.educationModalHandler}>
          <EducationForm
            education={educationForm}
            inputChangedHandler={this.inputChangedHandler}
            onSubmit={this.onSaveEducation}
          />
        </Modal>

        {/* experience componenets */}
        <div className="student-profile-experience-container">
          <ExperienceTable
            experience={experience}
            editExperience={this.experienceModalHandler}
            deleteExperience={this.deleteExperienceHandler}
          />
          <Button
            variant="contained"
            className="add-eduEx-button"
            onClick={() => this.experienceModalHandler(true)}
          >
            Add Experience
          </Button>
        </div>
        <Modal open={expModal} handleClose={this.experienceModalHandler}>
          <ExperienceForm
            experience={experienceForm}
            inputChangedHandler={this.inputChangedHandler}
            onSubmit={this.onSaveExperience}
          />
        </Modal>
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
    saveProfile: (uid, payload) => dispatch(actions.saveProfile(uid, payload)),
    saveEdu: (uid, payload) =>
      dispatch(actions.saveEduExp(uid, payload, "education")),
    saveExp: (uid, payload) =>
      dispatch(actions.saveEduExp(uid, payload, "experience"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Profile));
