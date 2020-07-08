import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
  clientId: "frontend",
  realm: "certificacionIAS",
  url: "http://localhost:8090/auth",
});

export const config = {
  initConfig: {
    onLoad: "login-required",
  },
  onTokens(tokens) {
    localStorage.setItem("tokens", tokens.token);
  },
};

export default keycloak;
