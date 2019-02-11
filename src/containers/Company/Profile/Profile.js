import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

import * as actions from "../../../store/actions/companiesActions";

import PersonalInfo from "../../../components/Students/PersonalInfo/PersonalInfo";
import PersonalInfoForm from "../../../components/Company/PersonalInfo/PersonalInfoForm";
import VacancyForm from "../../../components/Company/Vacancy/VacancyForm";
import VacanciesList from "../../../components/Company/Vacancy/VacanciesList";

import Spinner from "./../../../components/Spinner/Spinner";
import Modal from "../../../hoc/Modal";

import "./Profile.css";

class Profile extends Component {
  state = {
    infoModal: false,
    vacModal: false,
    vacEditIndex: "",
    info: {
      name: "",
      operatingSince: "",
      phone: "",
      facebook: "",
      website: "",
      introduction: "",
      address: ""
    },
    vacancyForm: {
      skills: "",
      gpa: "",
      salary: "",
      description: ""
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
    } else if (form === "vac") {
      const vacancyForm = { ...this.state.vacancyForm };
      vacancyForm[name] = value;
      this.setState({ vacancyForm });
    }
  };

  // info func
  companyInfoModalHandler = flag => {
    if (flag) {
      const info = { ...this.props.company };
      this.setState({ info });
    }
    this.setState({ infoModal: flag });
  };

  savecompanyInfoHandler = () => {
    const { auth, company, saveProfile } = this.props;
    const { info } = this.state;
    const { uid, email } = auth;
    const updatedCompany = { ...company, ...info, email };

    saveProfile(uid, updatedCompany);
    this.companyInfoModalHandler(false);
  };

  // vac func
  vacancyModalHandler = (flag, vacEditIndex = "") => {
    if (vacEditIndex !== "") {
      const { vacancies } = this.props.company;
      const vacancyForm = vacancies[vacEditIndex];
      this.setState({ vacancyForm, vacEditIndex });
    } else {
      this.clearFields();
    }
    this.setState({ vacModal: flag });
  };

  saveVacancyHandler = () => {
    const { vacEditIndex, vacancyForm } = this.state;
    const { auth, company, saveVac } = this.props;
    const { vacancies } = company;
    if (vacEditIndex !== "") vacancies[vacEditIndex] = vacancyForm;
    else vacancies.push(vacancyForm);

    saveVac(auth.uid, vacancies);
    this.clearFields();
    this.vacancyModalHandler(false);
  };

  deleteVacancyHandler = index => {
    const { auth, company, saveVac } = this.props;
    const { vacancies } = company;

    vacancies.splice(index, 1);
    saveVac(auth.uid, vacancies);

    // clear fields if currently editing vac is delete
    if (index === this.state.eduEditIndex) this.clearFields();
  };

  clearFields = () => {
    this.setState({
      vacancyForm: {
        skills: "",
        gpa: "",
        salary: "",
        description: ""
      },
      vacEditIndex: ""
    });
  };

  render() {
    const { auth, company } = this.props;
    const { infoModal, info, vacModal, vacancyForm } = this.state;
    const { email, loading } = auth;
    const {
      name,
      operatingSince,
      phoneNo,
      facebook,
      website,
      introduction,
      address,
      vacancies
    } = company;
    const companyInfo = [
      { key: "Name", value: name },
      { key: "Operating Since", value: operatingSince },
      { key: "Facebook", value: facebook },
      { key: "Website", value: website },
      { key: "Introduction", value: introduction },
      { key: "Address", value: address },
      { key: "Contact No", value: phoneNo },
      { key: "Email", value: email }
    ];

    return !loading ? (
      <div className="lol">
        <h1 className="main-heading-student-profile">Welcome {name}</h1>

        {/* profile componenets */}
        <div className="student-profile-card-container">
          <PersonalInfo
            stdudentInfo={companyInfo}
            onEdit={this.companyInfoModalHandler}
          />
        </div>
        <Modal open={infoModal} handleClose={this.companyInfoModalHandler}>
          <PersonalInfoForm
            info={info}
            inputChangedHandler={this.inputChangedHandler}
            onSubmit={this.savecompanyInfoHandler}
          />
        </Modal>

        {/* vacancies componenets */}
        <div className="company-vacancies-container" style={{ width: "100%" }}>
          <h2 className="sub-headings-company-profile">
            Your Posted Vacancies
          </h2>
          <Button
            variant="contained"
            className="add-vac-button"
            onClick={() => this.vacancyModalHandler(true)}
          >
            Add Vacancy
          </Button>
          <div>
            <VacanciesList
              vacancies={vacancies}
              editVacancy={this.vacancyModalHandler}
              deleteVacancy={this.deleteVacancyHandler}
            />
          </div>
        </div>
        <Modal open={vacModal} handleClose={this.vacancyModalHandler}>
          <VacancyForm
            vacancy={vacancyForm}
            inputChangedHandler={this.inputChangedHandler}
            onSubmit={this.saveVacancyHandler}
          />
        </Modal>
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
    company: state.company
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: uid => dispatch(actions.getProfile(uid)),
    saveProfile: (uid, payload) => dispatch(actions.saveProfile(uid, payload)),
    saveVac: (uid, payload) => dispatch(actions.saveVacancies(uid, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
