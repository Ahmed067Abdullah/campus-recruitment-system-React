import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../../store/actions/companiesActions";
import PersonalInfo from "../../../components/Students/PersonalInfo/PersonalInfo";

import Spinner from "./../../../components/Spinner/Spinner";

import { getDate } from "../../../common/timeHelperFunctions";

import "./Companies.css";

class Companies extends Component {
  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    const { auth, companies } = this.props;
    const { loading } = auth;

    const compnayInfoArray = companies.companies.map(company => [
      { key: "Name", value: company.name },
      { key: "Operating Since", value: getDate(company.operatingSince) },
      { key: "Facebook", value: company.facebook },
      { key: "Website", value: company.website },
      { key: "Introduction", value: company.introduction },
      { key: "Address", value: company.address },
      { key: "Contact No", value: company.phoneNo },
      { key: "Email", value: company.email },
      {
        key: "Posted Vacancies",
        value: company.vacancies ? company.vacancies.length : 0
      }
    ]);
    return !loading ? (
      <div className="lol">
        <h1 className="main-heading-student-profile">Registered Companies</h1>

        <div className="company-vacancies-container" style={{ width: "100%" }}>
          {compnayInfoArray.map((companyInfo, index) => (
            <div className="cmps-list-info-container" key={index}>
              <Link
                to={`/profile/${companies.companies[index].id}`}
                style={{ textDecoration: "none" }}
              >
                <PersonalInfo info={companyInfo} />
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
    companies: state.companies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompanies: () => dispatch(actions.getCompanies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
