import React from "react";
import { Container, Row, Col } from "reactstrap";
var ReactRotatingText = require("react-rotating-text");

function Typer() {
  return (
    <div className=" typist my-2">
      <h2>
        Hi, I'm Josh! A Web Developer with interest in
        <ReactRotatingText
          items={[
            " Cannabis Cultivation ",
            " Game Development",
            " Vinyl Enthusiast ",
          ]}
          color="#69DDFF"
        />
      </h2>
    </div>
  );
}
export default Typer;
