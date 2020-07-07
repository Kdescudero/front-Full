import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ListImages from "./listImages";
import UploadImg from "./uploadImg";

const useStyles = makeStyles(() => ({
  root: {
    padding: 12,
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    width: "46%",
    margin: 20,
  },
  rowFabButton: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 24,
    marginBottom: 12
  },
}));

const InputInfo = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} style={{ padding: 8 }}>
      <div>
        <Typography variant="h3" gutterBottom align="center">
          Detalle de orden
        </Typography>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          label="Cliente"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          label="Cliente"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          label="Cliente"
          variant="outlined"
        />
        <TextField className={classes.input} label="Total" variant="outlined" />
        <TextField
          className={classes.input}
          label="Descuento"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          label="Estado"
          variant="outlined"
        />
      </form>
      <div className={classes.rowFabButton}>
        <UploadImg />
      </div>
      <ListImages />
    </Paper>
  );
};

export default InputInfo;
