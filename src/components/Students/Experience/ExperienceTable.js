import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Aux from "../../../hoc/Auxiliary";
import EditableExperienceTableBody from "./EditableExperienceTableBody";
import getYear from "../../../common/getYear";

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

const experienceTable = props => {
  const { classes, experience, editExperience, deleteExperience } = props;
  const owner = true;

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
            {owner ? (
              <EditableExperienceTableBody
                experience={experience}
                classes={classes}
                editExperience={editExperience}
                deleteExperience={deleteExperience}
              />
            ) : (
              experience.map((row, index) => (
                <Aux key={index}>
                  <TableRow>
                    <TableCell align="center" padding="none">
                      {row.company}
                    </TableCell>

                    <TableCell align="center" padding="none">
                      {row.position}
                    </TableCell>

                    <TableCell align="center" padding="none">
                      {getYear(row.from)}
                    </TableCell>

                    <TableCell align="center" padding="none">
                      {getYear(row.to)}
                    </TableCell>
                  </TableRow>
                </Aux>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </Aux>
  ) : (
    <p>No Experience to Show</p>
  );
};

export default withStyles(styles)(experienceTable);