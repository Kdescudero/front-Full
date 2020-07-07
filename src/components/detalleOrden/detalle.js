import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    align: "center",
  },
  table: {
    minWidth: 650,
    padding: "10px",
  },

  textField: {
    margin: "20px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(5),
    width: "25ch",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <h2 align="center">Detalle Orden</h2>

      <div className={classes.root}>
        <div>
          <TextField
            label="Cliente"
            id="margin-none"
            //   defaultValue="Default Value"
            className={classes.textField}
          />
          <TextField
            label="Total"
            id="margin-none"
            //   defaultValue="Default Value"
            className={classes.textField}
          />
          <br />
          <TextField
            label="Descuento"
            id="margin-none"
            //   defaultValue="Default Value"
            className={classes.textField}
          />
          <TextField
            label="Estado"
            id="margin-none"
            //   defaultValue="Default Value"
            className={classes.textField}
          />
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
