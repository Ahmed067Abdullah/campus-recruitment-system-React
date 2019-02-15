import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Aux from "../../../hoc/Auxiliary";
import { getYear } from "../../../common/timeHelperFunctions";

const editableEducationTableBody = props => {
  const { education, editEducation, deleteEducation } = props;

  return education.map((row, index) => (
    <Aux key={index}>
      <TableRow>
        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`education-${index}`}>
            {row.institute}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`education-${index}`}>
            {row.degree}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`education-${index}`}>
            {getYear(row.from)}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell align="center" padding="none" className="ctxMenuTrigger">
          <ContextMenuTrigger id={`education-${index}`}>
            {getYear(row.to)}
          </ContextMenuTrigger>
        </TableCell>
      </TableRow>

      <ContextMenu id={`education-${index}`} className="ctxMenu">
        <MenuItem
          onClick={() => editEducation(true, index)}
          className="ctxMenuItem"
        >
          Edit
        </MenuItem>

        <div className="ctxMenuItemDivider" />

        <MenuItem
          onClick={() => deleteEducation(index)}
          className="ctxMenuItem"
        >
          Delete
        </MenuItem>
      </ContextMenu>
    </Aux>
  ));
};

export default editableEducationTableBody;
