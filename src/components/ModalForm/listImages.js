import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  listImg: {
    margin: "1px 3%",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-around",
  },
  formatList: {
    display: "flex",
    justifyContent: "center",
    margin: "12px 0",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ListImages = () => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={4} className={classes.listImg}>
        <Grid container justify="space-between" spacing={0}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item, value) => (
              <Grid key={value} item style={{ margin: 8 }}></Grid>
            )
          )}
        </Grid>
      </Paper>
      <Grid item xs={12} className={classes.formatList}>
        <Button variant="contained" color="primary" size="medium">
          Editar
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Crear
        </Button>
      </Grid>
    </>
  );
};

export default ListImages;
