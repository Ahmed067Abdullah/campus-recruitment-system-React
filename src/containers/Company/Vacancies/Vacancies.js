import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/companiesActions";

import VacanciesList from "../../../components/Company/Vacancy/VacanciesList";

import Spinner from "./../../../components/Spinner/Spinner";

class Vacancies extends Component {
  componentDidMount() {
    const { getVacancies } = this.props;
    getVacancies();
  }

  render() {
    const { auth, companies } = this.props;
    const { loading, admin } = auth;
    const { vacancies } = companies

    return !loading ? (
      <div className="lol">
        <h1 className="main-heading-student-profile">Posted Vacancies</h1>

        {/* vacancies componenets */}
        <div className="company-vacancies-container" style={{ width: "100%" }}>
          <VacanciesList
            vacancies={vacancies}
            deleteVacancy={this.deleteVacancyHandler}
            admin={admin}
          />
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
    companies: state.companies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVacancies: () => dispatch(actions.getVacancies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vacancies);
