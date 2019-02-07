import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import Aux from "../../hoc/Auxiliary";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  comp: {
    width: "40%",
    padding: "2%"
  },
  pos: {
    width: "24%",
    padding: "2%"
  },
  from: {
    width: "9%",
    padding: "2%"
  },
  to: {
    width: "11%",
    padding: "2%"
  },
  ctxMenu: {
    backgroundColor: "#1f4f16",
    color: "#e7ffde",
    width: 70,
    padding: 8,
    borderRadius: 5,
    cursor: "pointer"
  },
  ctxMenuItem: {
    paddingBottom: 0,
    marginBottom: 0,
    cursor: "pointer"
  },
  ctxMenuItemDivider: {
    backgroundColor: "#e7ffde",
    height: 1,
    marginTop: 5,
    marginBottom: 5
  },
  ctxMenuTrigger: {
    cursor: "pointer"
  }
});

const experienceTable = props => {
  const { classes, experience, editExperience, deleteExperience } = props;

  return experience.length > 0 ? (
    <Aux>
      <h2 className="sub-headings-student-profile">Experience</h2>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" padding="none" className={classes.comp}>
                Company
              </TableCell>
              <TableCell align="center" padding="none" className={classes.pos}>
                Position
              </TableCell>
              <TableCell align="center" padding="none" className={classes.from}>
                From
              </TableCell>
              <TableCell align="center" padding="none" className={classes.to}>
                To
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {experience.map((row, index) => (
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

                <ContextMenu
                  id={`experience-${index}`}
                  className={classes.ctxMenu}
                >
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
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Aux>
  ) : (
    <p>No Experience to Show</p>
  );
};

export default withStyles(styles)(experienceTable);
