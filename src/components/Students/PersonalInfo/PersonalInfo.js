import React from "react";
import Button from "@material-ui/core/Button";
import Card from "../../../hoc/Card";

const personalInfo = props => {
  const { info, onEdit } = props;
  return (
    <Card>
      {info.map(infoItem => (
        <p key={infoItem.key} className={"student-profile-info-container"}>
          <span className="student-profile-info-key">{infoItem.key}: </span>
          <span className="student-profile-info-val">{infoItem.value}</span>
        </p>
      ))}
      {onEdit ? (
        <Button
          onClick={() => onEdit(true)}
          variant="contained"
          className="auth-button"
        >
          Edit
        </Button>
      ) : (
        ""
      )}
    </Card>
  );
};

export default personalInfo;
