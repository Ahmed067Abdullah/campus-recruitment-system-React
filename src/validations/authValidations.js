import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const authValidations = () => {
    ValidatorForm.addValidationRule("isLongEnough", value => {
        if (value.trim().length < 6) {
          return false;
        }
        return true;
      });
}

export default authValidations;