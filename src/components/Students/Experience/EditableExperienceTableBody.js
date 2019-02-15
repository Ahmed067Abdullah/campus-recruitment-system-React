import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Aux from "../../../hoc/Auxiliary";
import { getYear } from "../../../common/timeHelperFunctions";

const editableExperienceTableBody = props => {
  const { experience, editExperience, deleteExperience } = props;

  return experience.map((row, index) => (
    <Aux key={index}>
      <TableRow>
        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`experience-${index}`}>
            {row.company}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`experience-${index}`}>
            {row.position}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`experience-${index}`}>
            {getYear(row.from)}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`experience-${index}`}>
            {getYear(row.to)}
          </ContextMenuTrigger>
        </TableCell>
      </TableRow>

      <ContextMenu id={`experience-${index}`} className="ctxMenu">
        <MenuItem
          onClick={() => editExperience(true, index)}
          className="ctxMenuItem"
        >
          Edit
        </MenuItem>

        <div className="ctxMenuItemDivider" />

        <MenuItem
          onClick={() => deleteExperience(index)}
          className="ctxMenuItem"
        >
          Delete
        </MenuItem>
      </ContextMenu>
    </Aux>
  ));
};

export default editableExperienceTableBody;