import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Aux from "../../../hoc/Auxiliary";

const editableExperienceTableBody = (props) => {
  const { experience, classes, editExperience, deleteExperience } = props;
  return experience.map((row, index) => (
    <Aux key={index}>
      <TableRow>
        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`experience-${index}`}>
            {row.company}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`experience-${index}`}>
            {row.position}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`experience-${index}`}>
            {row.from}
          </ContextMenuTrigger>
        </TableCell>

        <TableCell
          align="center"
          padding="none"
          className={classes.ctxMenuTrigger}
        >
          <ContextMenuTrigger id={`experience-${index}`}>
            {row.to}
          </ContextMenuTrigger>
        </TableCell>
      </TableRow>

      <ContextMenu id={`experience-${index}`} className={classes.ctxMenu}>
        <MenuItem
          data={{ foo: "bar" }}
          onClick={() => editExperience(index)}
          className={classes.ctxMenuItem}
        >
          Edit
        </MenuItem>
        <div className={classes.ctxMenuItemDivider} />
        <MenuItem
          data={{ foo: "bar" }}
          onClick={() => deleteExperience(index)}
          className={classes.ctxMenuItem}
        >
          Delete
        </MenuItem>
      </ContextMenu>
    </Aux>
  ));
}

export default editableExperienceTableBody;