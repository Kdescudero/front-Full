import React, { useEffect, useState } from "react";
import List from "./List/list";
import InputSearch from "./List/inputSearch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { LisProducts } from "data";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "0 18px 15px 18px",
  },
}));

const ListProducts = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    LisProducts(setData, setLoading);
  }, []);

  return (
    <div className={classes.root}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={12} style={{ padding: 12 }}>
            <Typography variant="h3" gutterBottom align="center">
              Lista de Productos
            </Typography>
            <InputSearch />
          </Grid>
          <Grid item xs={12}>
            <List data={data} setData={setData} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ListProducts;
