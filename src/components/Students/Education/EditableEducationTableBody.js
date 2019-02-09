import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Aux from "../../../hoc/Auxiliary";
import getYear from "../../../common/getYear";

const editableEducationTableBody = props => {
  const { education, classes, editEducation, deleteEducation } = props;
  return education.map((row, index) => (
    <Aux key={index}>
      <TableRow>
        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`education-${index}`}>
            {row.institute}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`education-${index}`}>
            {row.degree}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`education-${index}`}>
            {getYear(row.from)}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`education-${index}`}>
            {getYear(row.to)}
          </ContextMenuTrigger>
        </TableCell>
      </TableRow>

      <ContextMenu id={`education-${index}`} className={classes.ctxMenu}>
        <MenuItem
          data={{ foo: "bar" }}
          onClick={() => editEducation(true,index)}
          className={classes.ctxMenuItem}
        >
          Edit
        </MenuItem>
        <div className={classes.ctxMenuItemDivider} />
        <MenuItem
          data={{ foo: "bar" }}
          onClick={() => deleteEducation(index)}
          className={classes.ctxMenuItem}
        >
          Delete
        </MenuItem>
      </ContextMenu>
    </Aux>
  ));
};

export default editableEducationTableBody;
