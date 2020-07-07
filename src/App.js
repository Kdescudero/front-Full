import React, { useEffect, useState } from "react";
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak, { config as keyCloakProps } from "./keycloak";
import Header from "./components/Header";
import Router from "./router";
import Storage from "./reducers/store"

const validateToken = () => {
  const token = localStorage.getItem("tokens");
  return token ? true : false;
};

const Components = () => (
  <Storage>
    <Header />
    <Router />
  </Storage>
);

const App = () => {
  const [validate, setValidate] = useState({});

  useEffect(() => {
    setValidate(validateToken());
  }, []);

  return (
    <KeycloakProvider keycloak={keycloak} {...keyCloakProps}>
      {validate && <Components />}
    </KeycloakProvider>
  );
};

export default App;
