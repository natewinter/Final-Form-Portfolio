import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./Assests/DummyText";
import HomeText from "./Assests/HomeText";
import Typer from "./Components/Typewriter";
import Particles from "react-particles-js";
import Footer from "./Components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <Particles
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
          </div>
          <Navbar />
          <Typer />
          <Section title="Home" subtitle={HomeText} dark={true} id="Home" />
          <Section
            title="Projects"
            subtitle="check out my projects"
            dark={false}
            id="Projects"
          />
          <Section
            title="About Me"
            subtitle={dummyText}
            dark={true}
            id="About Me"
          />
          {/* footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
