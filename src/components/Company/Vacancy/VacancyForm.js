import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// import Card from "../../hoc/Card";
import validations from "../../../validation/Validation";

const styles = theme => {
  return {
    TextFields: {
      marginBottom: "20px",
      width: "95%"
    }
  };
};

class VacancyForm extends Component {
  componentDidMount() {
    validations();
  }

  handleChange = event => {
    this.props.inputChangedHandler(event, "vac");
  };

  handleSubmit = () => {
    this.props.onSubmit();
  };

  render() {
    const { vacancy, classes } = this.props;
    const { skills, gpa, salary, description } = vacancy;
    return (
      <div style={{ marginTop: 50 }}>
        <div className="card-container">
          <h2 className="singin-heading">Edit Vacancy</h2>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => console.log(errors)}
          >
            <TextValidator
              className={classes.TextFields}
              label="Skills"
              onChange={this.handleChange}
              name="skills"
              value={skills}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Minimum CGPA"
              onChange={this.handleChange}
              name="gpa"
              value={gpa}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Minimum Salary"
              onChange={this.handleChange}
              name="salary"
              value={salary}
            />
            <br />
            <TextValidator
              className={classes.TextFields}
              label="Description"
              onChange={this.handleChange}
              name="description"
              value={description}
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

export default withStyles(styles)(VacancyForm);
