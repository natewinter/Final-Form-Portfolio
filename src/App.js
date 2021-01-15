import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";
import dummyText from "./Assests/DummyText";
import HomeText from "./Assests/HomeText";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Project from "./Components/Projects";
import Typer from "./Components/Typewriter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          id="particles-js"
          style={{ position: "fixed", top: 0 }}
          params={{
            particles: {
              color: {
                value: "#000000",
              },
              line_linked: {
                color: {
                  value: "#000000",
                },
              },
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
          }}
        />
        <Navbar />
        <Typer />
        <Section
          title="Welcome to my portfolio!"
          subtitle={HomeText}
          dark={true}
          id="Home"
        />
        <Section
          title="Projects"
          subtitle="check out my projects"
          dark={false}
          id="Projects"
        />
        <Project />
        <Section
          title="About Me"
          subtitle={dummyText}
          dark={true}
          id="AboutMe"
        />
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
