import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useNavigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
    },
  },
  positionButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const InputSearch = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.root}>
          <TextField placeholder="Buscar Productos" variant="outlined" />
        </Grid>
        <Grid item xs={12} className={classes.positionButton}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ marginTop: 5 }}
            onClick={() => navigate("/FormOrders")}
          >
            Agregar productos al catalogo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InputSearch;
