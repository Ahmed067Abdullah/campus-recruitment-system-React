import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Card from "../../hoc/Card";
import authValidations from "../../validations/authValidations";
import "./SignIn.css";

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

class SignIn extends Component {
  state = {
    email: "",
    pass: "",
    error: "",
    loading: false
  };

  componentDidMount() {
    authValidations();
  }

  handleChange = event => {
    // const {name, value} = event.target
    // this.props.setAuthValue(name,value)
    // this.setState({[event.target.name] : event.target.value})
  };

  handleSubmit = () => {
    // this.props.onSignIn();
    // this.setState({ loading: true });
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(this.state.email, this.state.pass)
    //   .then(res => {
    //     const uid = res.user.uid;
    //     if (uid === "RkpPKqNLeaTeHS5poTCWTJd70fK2") {
    //       this.props.setAdmin();
    //       this.props.onLogin(uid);
    //       this.props.history.replace("/crimes");
    //     } else {
    //       firebase
    //         .database()
    //         .ref(`reporters/${uid}`)
    //         .once("value")
    //         .then(res => {
    //           this.props.onLogin(uid);
    //           if (res.val()) this.props.onSetRegistered(res.val().name);
    //           this.props.history.replace("/register");
    //         })
    //         .catch(err => {
    //           this.setState({ error: err, loading: false });
    //         });
    //     }
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false });
    //     let errorMessage = "";
    //     if (error.code === "auth/wrong-password")
    //       errorMessage = "Wrong Password";
    //     else if (error.code === "auth/user-not-found")
    //       errorMessage = "User Doesn't Exist";
    //     else errorMessage = error.message;
    //     this.setState({ error: errorMessage });
    //   });
  };
  render() {
    const { email, password, loading, error, classes } = this.props;
    return (
      <div style={{ marginTop: 50 }}>
        <h1 className="main-heading">Campus Recruitment System</h1>
        <div className="card-container">
          {!loading ? (
            <Card>
              <h2 className="singin-heading">Sign In</h2>
              <p className="Error">{error ? error : null}</p>
              <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
              >
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
                  name="pass"
                  value={password}
                  validators={["required", "isLongEnough"]}
                  errorMessages={[
                    "This field is required",
                    "Password must be longer than 6 characters"
                  ]}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  className="btn btn-info my-reports-button login-button"
                >
                  Sign In
                </Button>
              </ValidatorForm>
              <p>
                Don't Have an Account? <Link to="/signup">Sign Up</Link>
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

export default withStyles(styles)(SignIn);
// export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignIn));
