import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Card from "../../hoc/Card";
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
      marginBottom: "15px",
      backgroundColor: "#374F6B",
      color: "white"
    },
    authMessage: {
      textDecoration: "underline",
      cursor: "pointer"
    }
  };
};

class SignUp extends Component {
  state = { type: "std" };
  componentDidMount() {
    authValidations();
  }

  handleChange = event => {
    // const {name, value} = event.target
    // this.props.setAuthValue(name,value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    // this.props.onSignUp();
    // this.setState({ loading: true });
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.pass)
    //   .then(res => {
    //     const uid = res.user.uid;
    //     this.setState({ loading: false });
    //     this.props.onLogin(uid);
    //     this.props.history.replace("/register");
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false });
    //     let errorMessage = "";
    //     if (error.code === "auth/email-already-in-use")
    //       errorMessage = "Account For This Email is Already Registered";
    //     else if (error.code === "auth/invalid-email")
    //       errorMessage = "Invalid Email";
    //     else errorMessage = error.message;
    //     this.setState({ error: errorMessage });
    //   });
  };
  render() {
    const {
      type,
      name,
      email,
      enrollNo,
      phone,
      address,
      password,
      rePassword,
      loading,
      error,
      classes
    } = this.props;
    let formFields = "";
    if (this.state.type === "std") {
      formFields = (
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            className={classes.TextFields}
            label="Name"
            onChange={this.handleChange}
            name="name"
            value={name}
            validators={["required"]}
            errorMessages={["This field is required"]}
          />
          <br />
          <TextValidator
            className={classes.TextFields}
            label="Enrollment Number"
            onChange={this.handleChange}
            name="enrollNo"
            value={enrollNo}
            validators={["required"]}
            errorMessages={["This field is required"]}
          />
          <br />

          <TextValidator
            className={classes.TextFields}
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["This field is required", "Invalid Email"]}
          />
          <br />
          <TextValidator
            className={classes.TextFields}
            label="Password"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={password}
            validators={["required", "isLongEnough"]}
            errorMessages={[
              "This field is required",
              "Password must be longer than 6 characters"
            ]}
          />
          <br />
          <TextValidator
            className={classes.TextFields}
            label="Confirm Password"
            type="password"
            onChange={this.handleChange}
            name="rePassword"
            value={rePassword}
            validators={["required", "isLongEnough"]}
            errorMessages={["This field is required"]}
          />
          <br />
        </ValidatorForm>
      );
    } else {
      formFields = (
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            className={classes.TextFields}
            label="Name"
            onChange={this.handleChange}
            name="name"
            value={name}
            validators={["required"]}
            errorMessages={["This field is required"]}
          />
          <br />

          <TextValidator
            className={classes.TextFields}
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["This field is required", "Invalid Email"]}
          />
          <br />

          <TextValidator
            className={classes.TextFields}
            label="Address"
            onChange={this.handleChange}
            name="address"
            value={address}
            validators={["required"]}
            errorMessages={["This field is required"]}
          />
          <br />

          <TextValidator
            className={classes.TextFields}
            label="Phone Number"
            onChange={this.handleChange}
            name="phoneNo"
            value={address}
            validators={["required"]}
            errorMessages={["This field is required"]}
          />
          <br />

          <TextValidator
            className={classes.TextFields}
            label="Password"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={password}
            validators={["required", "isLongEnough"]}
            errorMessages={[
              "This field is required",
              "Password must be longer than 6 characters"
            ]}
          />
          <br />
          <TextValidator
            className={classes.TextFields}
            label="Confirm Password"
            type="password"
            onChange={this.handleChange}
            name="rePassword"
            value={rePassword}
            validators={["required", "isLongEnough"]}
            errorMessages={["This field is required"]}
          />
          <br />
        </ValidatorForm>
      );
    }
    return (
      <div style={{ marginTop: 50 }}>
        <h1 className="main-heading-signup">Campus Recruitment System</h1>
        <div className="signup-card-container">
          {!loading ? (
            <Card>
              <h2 className="singin-heading">Sign Up</h2>
              <p className="type-para">
                <span className="type-text">Create Account As{"   "}</span>
                <FormControl className={classes.formControl}>
                  <Select
                    value={this.state.type}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "type",
                      id: "type-simple"
                    }}
                  >
                    <MenuItem value="std">Student</MenuItem>
                    <MenuItem value="cmp">Company</MenuItem>
                  </Select>
                </FormControl>
              </p>
              <hr />
              <p className="Error">{error ? error : null}</p>
              {formFields}
              <Button
                type="submit"
                variant="contained"
                className="btn btn-info my-reports-button login-button"
              >
                Sign Up
              </Button>
              <p>
                Already Have an Account? <Link to="/signin">Sign In</Link>
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

export default withStyles(styles)(SignUp);
// export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignUp));
