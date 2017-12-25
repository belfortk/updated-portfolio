import React from "react";
import { connect } from "react-redux";
import { Router, Link } from "react-router-dom";

import HomeSection from "./HomeComponents/HomeSection";
import AboutMeSection from "./HomeComponents/AboutMeSection";
import SkillsSection from "./HomeComponents/SkillsSection";
import PortfolioSection from "./HomeComponents/PortfolioSection";
import ContactSection from "./HomeComponents/ContactSection";
import Footer from "../Footer";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  blurHandler() {}

  render() {
    return (
      <main>
        <HomeSection />
        <AboutMeSection />
        <div className="container">
          <div className="divider" />
        </div>
        <SkillsSection />
        <div className="container">
          <div className="divider" />
        </div>
        <PortfolioSection />
        <div className="container">
          <div className="divider" />
        </div>
        <ContactSection />
        <Footer />
      </main>
    );
  }
}

export function mapStateToProps(store) {
  return {};
}

export default connect(mapStateToProps)(HomeComponent);
