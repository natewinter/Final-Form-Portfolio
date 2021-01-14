import React from "react";
import { Container, Row, Col } from "reactstrap";
var ReactRotatingText = require("react-rotating-text");

function Typer() {
  return (
    <div className=" typist my-2">
      <h2>
        <h1>Hi, I'm Josh Brown! A</h1>
        <ReactRotatingText
          items={[
            "Web Developer",
            " Cannabis Cultivation ",
            " Game Developer",
            " Vinyl Enthusiast ",
          ]}
          color="#f0eef2"
        />
      </h2>
    </div>
  );
}
export default Typer;
