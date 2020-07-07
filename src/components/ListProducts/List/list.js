import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "./card";
import { makeStyles } from "@material-ui/core";
import { useStorage } from "../../../reducers/store";

const useStyles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: 18,
  },
});

const List = ({ data, setData }) => {
  const classes = useStyles();
  const { dispatch } = useStorage();
  const [more, setMore] = useState(5);

  return (
    <>
      <Grid container justify="space-between" spacing={0}>
        {data.slice(0, more).map((value, key) => (
          <Grid key={key} item style={{ margin: 8 }}>
            <Card
              data={data}
              value={value}
              setData={setData}
              dispatch={dispatch}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} className={classes.button}>
        {more === data.length || more > data.length ? null : (
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => setMore(more === data.length ? null : more + 5)}
          >
            Ver Mas {more}
          </Button>
        )}
      </Grid>
    </>
  );
};

export default List;
