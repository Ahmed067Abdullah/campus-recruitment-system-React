import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import validations from "../../../validation/Validation";

const styles = theme => {
  return {
    TextFields: {
      marginBottom: "20px",
      width: "95%"
    },
    root: {
      color: "#1f4f16",
      "&$checked": {
        color: "#1f4f16"
      }
    },
    checked: {}
  };
};

class EducationForm extends Component {
  componentDidMount() {
    validations();
  }

  handleChange = event => {
    this.props.inputChangedHandler(event, "edu");
  };

  handleCheckBox = name => event => {
    this.handleChange({ target: { name, value: event.target.checked } });
  };

  handleSubmit = () => {
    this.props.onSubmit();
  };

  render() {
    const { education, classes } = this.props;
    const { institute, degree, from, to, currently } = education;

    return (
      <div style={{ marginTop: 50 }}>
        <div className="card-container">
          <h2 className="singin-heading">Education</h2>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => console.log(errors)}
          >
            <TextValidator
              className={classes.TextFields}
              label="Institute"
              onChange={this.handleChange}
              name="institute"
              value={institute}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Degree"
              onChange={this.handleChange}
              name="degree"
              value={degree}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextField
              id="date"
              label="From"
              type="date"
              required
              onChange={this.handleChange}
              name="from"
              value={from}
              className={classes.TextFields}
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={currently}
                  onChange={this.handleCheckBox("currently")}
                  value="currently"
                  classes={{
                    root: classes.root,
                    checked: classes.checked
                  }}
                />
              }
              label="I currently study there"
            />

            {/* if not currently then show to field */}
            {currently ? "" : (
              <TextField
                id="date"
                label="To"
                type="date"
                required
                onChange={this.handleChange}
                name="to"
                value={to}
                className={classes.TextFields}
                InputLabelProps={{
                  shrink: true
                }}
              />
            )}
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

export default withStyles(styles)(EducationForm);
