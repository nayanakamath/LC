import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        background: "#521b57",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        position: "fixed",
        top: "0px",
        width: "100%",
        padding: "15px",
      }}
    >
      {/* <div style={{ float: "left" }}>
        <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
      <img  src={require("./images/logo.jpg")} id="logo-img"/>
        </Link>{" "}
      </div> */}
      <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
        About us
      </Link>{" "}
      |{" "}
      <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
        Contact us
      </Link>{" "}
    </div>
  );
}
