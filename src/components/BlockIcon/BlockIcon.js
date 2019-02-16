import React from "react";

const deleteIcon = props => (
  <span className="block-icon" onClick={() => props.onBlock(props.id)}>
    <i className="fas fa-ban" />
  </span>
);

export default deleteIcon;
