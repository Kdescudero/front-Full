import React from "react";
import { TextField, Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import stateImputs from "validate";
import Axios from "axios";

import { useNavigate } from "@reach/router";
import { useStorage } from "../../reducers/store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: 30,
    "& > *": {
      flexGrow: 1,
      align: "center",
      margin: theme.spacing(1),
      width: "45%",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));

// const showFiles = async (files) => {
//   for (let file of files) {
//     let reader = new FileReader();
//     reader.onload = async (e) => {
//       let span = document.createElement("span");
//       span.innerHTML = [
//         `<img src="${e.target.result}" title="${escape(file.name)}">`,
//       ].join("");
//       document.getElementById("list").insertBefore(span, null);
//     };
//     reader.readAsDataURL(file);
//   }

//   // try {
//   //   const { data } = await Axios({
//   //     method: "post",
//   //     url: "http://localhost:8080/api/v1/products/5",
//   //     data: [{ archivo: e.target.result }],
//   //     header: {
//   //       Accept: "application/json",
//   //       "Content-Type": "multipart/form-data",
//   //     },
//   //   });
//   //   console.log("data", data);
//   // } catch (error) {
//   //   new Error(error);
//   // }
// };

const showFiles = (files) => {
  let formData = new FormData();
  formData.append("archivo", files);
  try {
    const { data } = Axios({
      method: "post",
      url: "http://localhost:8080/api/v1/products/5",
      data: formData,
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("data", data);
  } catch (error) {
    throw new Error(error);
  }
};

const Form = () => {
  const { dispatch } = useStorage();
  const product = {}
  const navigate = useNavigate();
  const formik = stateImputs(dispatch, product);
  const classes = useStyles();
  const disabled = Object.values(formik.values).every((item) => item !== "");

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Nombre"
        type="text"
        name="name"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.name}
        helperText={formik.errors.name}
        error={Boolean(formik.errors.name)}
      />

      <TextField
        id="outlined-basic"
        multiline={true}
        rowsMax={5}
        label="Descripcion"
        type="text"
        name="description"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.description}
        helperText={formik.errors.description}
        error={Boolean(formik.errors.description)}
      />

      <TextField
        id="outlined-basic"
        label="Precio Base"
        type="number"
        name="basePrice"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.basePrice}
        helperText={formik.errors.basePrice}
        error={Boolean(formik.errors.basePrice)}
      />

      <TextField
        id="outlined-basic"
        label="Inventario"
        type="number"
        name="inventoryQuantity"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.inventoryQuantity}
        helperText={formik.errors.inventoryQuantity}
        error={Boolean(formik.errors.inventoryQuantity)}
      />

      <TextField
        id="outlined-select-currency-native"
        label="Estado"
        name="productStatus"
        select
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.productStatus}
        helperText={formik.errors.productStatus}
        error={Boolean(formik.errors.productStatus)}
      >
        <MenuItem value={"Publicado"}>PUBLICADO</MenuItem>
        <MenuItem value={"Borrado"}>BORRADO</MenuItem>
      </TextField>

      <TextField
        id="outlined-basic"
        label="Tasa Impuesto"
        type="number"
        name="taxRate"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.taxRate}
        helperText={formik.errors.taxRate}
        error={Boolean(formik.errors.taxRate)}
      />

      <input
        type="file"
        id="file"
        accept="image/*"
        multiple
        onChange={(e) => showFiles(e.target.files)}
      />

      <span id="list"></span>

      <Button
        align="center"
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
      >
        Atras
      </Button>

      <Button
        type="submit"
        align="center"
        variant="contained"
        color="primary"
        disabled={!disabled}
        onClick={() => navigate("/", { replace: true })}
      >
        Enviar
      </Button>
    </form>
  );
};

export default Form;
