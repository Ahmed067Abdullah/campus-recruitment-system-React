import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Aux from "../../../hoc/Auxiliary";
import EditableEducationTableBody from "./EditableEducationTableBody";

import {getYear} from "../../../common/timeHelperFunctions";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  inst: {
    width: "40%",
    padding: "2%"
  },
  deg: {
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
    cursor: "pointer",
    zIndex : 1
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

const educationTable = props => {
  const { classes, education, deleteEducation, editEducation,owner,admin } = props;

  return education.length > 0 ? (
    <Aux>
      <h2 className="sub-headings-student-profile">Education</h2>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" padding="none" className={classes.inst}>
                Institute
              </TableCell>
              <TableCell align="center" padding="none" className={classes.deg}>
                Degree
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
            {owner ? (
              <EditableEducationTableBody
                classes={classes}
                education={education}
                deleteEducation={deleteEducation}
                editEducation={editEducation}
              />
            ) : (
              education.map((row, index) => (
                <TableRow>
                  <TableCell key={index} align="center" padding="none">
                    {row.institute}
                  </TableCell>

                  <TableCell align="center" padding="none">
                    {row.degree}
                  </TableCell>

                  <TableCell align="center" padding="none">
                    {getYear(row.from)}
                  </TableCell>

                  <TableCell align="center" padding="none">
                    {getYear(row.to)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </Aux>
  ) : (
    <p>No Education to Show</p>
  );
};

export default withStyles(styles)(educationTable);
