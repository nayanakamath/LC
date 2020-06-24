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
        padding: "15px"
      }}
    >
      <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
        About
      </Link>{" "}
    </div>
  );
}
