import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const UploadImg = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        
      />
      <label htmlFor="contained-button-file">
        <Fab color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </Fab>
      </label>
    </div>
  );
};

export default UploadImg;
