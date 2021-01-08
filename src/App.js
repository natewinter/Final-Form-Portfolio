import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./Assests/DummyText";
import HomeText from "./Assests/HomeText";
import Typer from "./Components/Typewriter";
class App extends Component {
  render() {
    return (
      <div className="App">
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
        <Section
          title="Contact"
          subtitle="Message me!"
          dark={false}
          id="Contact"
        />
      </div>
    );
  }
}

export default App;
