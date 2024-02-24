import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CookieConsent from "react-cookie-consent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <CookieConsent
        location="bottom"
        buttonText="J'accepte"
        enableDeclineButton
        declineButtonText="Je refuse"
        cookieName="SylvainDubrayAvocat"
        expires={150}
        buttonStyle={{
          color: "black",
          background: "rgb(189 90 90)",
          fontSize: "18px",
          padding: "8px 16px",
          borderRadius: "2px",
        }}
        declineButtonStyle={{
          color: "white",
          background: "gray",
          fontSize: "18px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        style={{ background: "#222", color: "white" }}
      >
        Ce site utilise des cookies pour offrir la meilleure expérience
        utilisateur.{" "}
      </CookieConsent>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
