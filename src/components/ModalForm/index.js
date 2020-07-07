import React from "react";
import Grid from "@material-ui/core/Grid";
import InputInfo from "./inputInfo";

const OrderDetail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <InputInfo />
      </Grid>
    </Grid>
  );
};

export default OrderDetail;
