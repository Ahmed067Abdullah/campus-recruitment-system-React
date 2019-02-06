import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
});

function EducationTable(props) {
  const { classes, education } = props;
  console.log(education);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.index}>Institute</TableCell>
            <TableCell align="center" className={classes.index}>Degree</TableCell>
            <TableCell align="center" className={classes.index}>From</TableCell>
            <TableCell align="center" className={classes.index}>To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {education.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.institue}</TableCell>
              <TableCell align="center">{row.degree}</TableCell>
              <TableCell align="center">{row.from}</TableCell>
              <TableCell align="center">{row.to}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    // component="th" scope="row"
  );
}

export default withStyles(styles)(EducationTable);
