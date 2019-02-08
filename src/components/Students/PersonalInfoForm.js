import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// import Card from "../../hoc/Card";
import validations from "../../validation/Validation";

const styles = theme => {
  return {
    TextFields: {
      marginBottom: "20px",
      width: "95%"
    }
  };
};

class PersonalInfoForm extends Component {
  componentDidMount() {
    validations();
  }

  handleChange = event => {
    this.props.inputChangedHandler(event);
  };

  handleSubmit = () => {
    this.props.onSubmit();
  };

  render() {
    const { info, classes } = this.props;
    const {
      name,
      dob,
      enrollNo,
      skills,
      introduction,
      address,
      phone,
      github,
      linkedin
    } = info;
    return (
      <div style={{ marginTop: 50 }}>
        <div className="card-container">
          <h2 className="singin-heading">Edit Personal Information</h2>
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
              label="Skills"
              onChange={this.handleChange}
              name="skills"
              value={skills}
            />
            <br />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              onChange={this.handleChange}
              name="dob"
              value={dob}
              className={classes.TextFields}
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Introduce Yourself"
              onChange={this.handleChange}
              name="introduction"
              value={introduction}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Address"
              onChange={this.handleChange}
              name="address"
              value={address}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Contact No"
              onChange={this.handleChange}
              name="phone"
              value={phone}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Github Handle"
              onChange={this.handleChange}
              name="github"
              value={github}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="LinkedIn Handle"
              onChange={this.handleChange}
              name="linkedin"
              value={linkedin}
            />
            <br />
            <Button type="submit" variant="contained" className="auth-button">
              Save
            </Button>
          </ValidatorForm>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PersonalInfoForm);