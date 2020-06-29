import React from "react";
import { Link } from "react-router-dom";
import "/Users/nayanakamath/Desktop/vsWorkspace/lc-online/src/App.css";

export default function Header() {
  return (
    <div
      style={{
        color: "red",
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
      <Link to="/home" style={{ textDecoration: "none", color: "red" }}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={{ textDecoration: "none", color: "red" }}>
        About us
      </Link>{" "}
      |{" "}
      <Link to="/contact" style={{ textDecoration: "none", color: "red" }}>
        Contact us
      </Link>{" "}
    </div>
  );
}
