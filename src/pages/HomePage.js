import React from "react";
import About from "./AboutMe";
import "./HomePage.css";
import LandingContent from "./LandingContent";
import Aspects from "./Aspects";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <LandingContent />
        <About />
        <Aspects />
      </div>
    );
  }
}

export default HomePage;
