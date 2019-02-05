import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as actions from "../../store/actions/authActions";
import Card from "../../hoc/Card";
import SignUpFields from "./../../components/Auth/SignUpForm";
import authValidations from "../../validations/authValidations";
import "./SignUp.css";

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

class SignUp extends Component {
  componentDidMount() {
    authValidations();
    ValidatorForm.addValidationRule("doPasswordsMatch", value => {
      if (value !== this.props.auth.password) return false;
      return true;
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.props.onInputChange({ key: name, value });
  };

  handleSubmit = () => {
    this.props.onSignUp();
  };

  render() {
    const { classes, auth } = this.props;
    const { errorSignup, loading, type } = auth;
    const formFields = (
      <SignUpFields
        auth={auth}
        classes={classes}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );

    return (
      <div style={{ marginTop: 50 }}>
        <h1 className="main-heading-signup">Campus Recruitment System</h1>
        <div className="signup-card-container">
          {!loading ? (
            <Card>
              <h2 className="singin-heading">Sign up</h2>
              <div className="type-para">
                <span className="type-text">Create Account As{"    "}</span>
                <FormControl className={classes.formControl}>
                  <Select
                    value={type}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "type",
                      id: "type-simple"
                    }}
                  >
                    <MenuItem value="students">Student</MenuItem>
                    <MenuItem value="companies">Company</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <p className="Error">{errorSignup ? errorSignup : null}</p>
              {formFields}
              <p>
                Already Have an Account?{" "}
                <Link to="/signin" className="auth-type">
                  Sign In
                </Link>
              </p>
            </Card>
          ) : (
            <div className="auth-spinner" />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: payload => dispatch(actions.changeInput(payload)),
    onSignUp: () => dispatch(actions.signup())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
