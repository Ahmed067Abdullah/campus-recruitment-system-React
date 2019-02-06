import { ValidatorForm } from "react-material-ui-form-validator";

const authValidations = () => {
  ValidatorForm.addValidationRule("isNameLongEnough", value => {
    if (value.trim().length < 3) return false;
    return true;
  });

  ValidatorForm.addValidationRule("isAddressLongEnough", value => {
    if (value.trim().length < 10) return false;
    return true;
  });

  ValidatorForm.addValidationRule("isPhoneLengthOk", value => {
    if (value.trim().length !== 11) return false;
    return true;
  });

  ValidatorForm.addValidationRule("isPasswordLongEnough", value => {
    if (value.trim().length < 6) return false;
    return true;
  });
};

export const signinValidations = () => {
  ValidatorForm.addValidationRule("isPasswordLongEnough", value => {
    if (value.trim().length < 6) return false;
    return true;
  });
} 

export default authValidations;
