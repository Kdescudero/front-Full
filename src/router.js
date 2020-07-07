import React from "react";
import { Router } from "@reach/router";
import ListProducts from "./components/ListProducts";
import ModalForm from "./components/ModalForm";
import FormOrders from "./components/CreateForm/form";
import Detalle from "./components/detalleOrden/detalle";
import EditForm from "./components/EditFrom";

export const Rout = () => (
  <Router>
    <ListProducts path="/" />
    <ModalForm path="ModalForm" />
    <FormOrders path="FormOrders" />
    <Detalle path="Detalle" />
    <EditForm path="EditFrom/:id" />
  </Router>
);

export default Rout;
