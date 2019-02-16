import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../../store/actions/companiesActions";
import { blockAccount } from "../../../store/actions/authActions";
import PersonalInfo from "../../../components/Students/PersonalInfo/PersonalInfo";
import BlockIcon from "../../../components/BlockIcon/BlockIcon";

import Spinner from "./../../../components/Spinner/Spinner";

import { getDate } from "../../../common/timeHelperFunctions";
import navigationHandler from "../../../common/navigationHandler";

import "./Companies.css";

class Companies extends Component {
  componentDidMount() {
    this.props.getCompanies();
  }

  onBlock = uid => {
    this.props.blockAccount(uid);
  };

  render() {
    const { auth, companies } = this.props;
    const { loading, admin } = auth;

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
        value: company.vacancies ? company.vacancies.length : "0"
      }
    ]);
    return !loading ? (
      <div className="lol">
        <h1 className="main-heading-companies">Registered Companies</h1>

        <div className="company-vacancies-container" style={{ width: "100%" }}>
          {compnayInfoArray.length > 0 ? (
            compnayInfoArray.map((companyInfo, index) => {
              const id = companies.companies[index].id;
              return (
                <div className="cmps-list-info-container" key={index}>
                  <Link
                    to={`/profile/${id}`}
                    style={{ textDecoration: "none" }}
                    onClick={e => navigationHandler(e, admin)}
                  >
                    {admin ? <BlockIcon onBlock={this.onBlock} id={id} /> : ""}
                    <PersonalInfo info={companyInfo} />
                  </Link>
                </div>
              );
            })
          ) : (
            <h1 className="blocked-msg">No Companies to Show.</h1>
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
    companies: state.companies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompanies: () => dispatch(actions.getCompanies()),
    blockAccount: uid => dispatch(blockAccount("companies", uid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
