import React from "react";
import { connect } from "react-redux";
import HomeSection from "./HomeComponents/HomeSection";
import AboutMeSection from "./HomeComponents/AboutMeSection";
import SkillsSection from "./HomeComponents/SkillsSection";
import PortfolioSection from "./HomeComponents/PortfolioSection";
import ContactSection from "./HomeComponents/ContactSection";
import Footer from "../Footer";

class HomeComponent extends React.Component {
  render() {
    return (
      <main>
        <HomeSection />

        <AboutMeSection />
        <div className="container">
          <div className="divider" />
        </div>
        <SkillsSection />
        <div id="content">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
          <PortfolioSection />
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
