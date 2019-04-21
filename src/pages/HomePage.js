import React from "react";
import About from "./AboutMe";
import "./HomePage.css";
import LandingContent from "./LandingContent";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <LandingContent />
        <About />
      </div>
    );
  }
}

export default HomePage;
