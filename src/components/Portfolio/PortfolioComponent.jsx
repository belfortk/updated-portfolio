import React from "react";
import Footer from "../Footer";
import Navbar from "../ProjectNavbar";

class PortfolioItem extends React.Component {
  render() {
    return (
      <div>
       <Navbar/>

        <main>
          <div className="container portfolio-project-page">
            <h3> {this.props.title}</h3>
            <p style={{ color: "#555" }}> {this.props.description}</p>
            {this.props.liveLink ? (
            <a href={this.props.liveLink}>See it live</a>             
            ) : (
              <p>Not yet released</p>
            )}
            <br /> 
            {this.props.github ? (
              <a href={this.props.github}>
                <img
                  style={{ position: "absolute", top: 0, right: 0, border: 0 }}
                  src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
                  alt="Check me out on GitHub"
                />
              </a>
            ) : (
              <p style={{ position: "absolute", top: 0, right: 0, border: 0, marginRight: "1rem", color: "white" }}>
                Sorry, this is a private repo!{" "}
              </p>
            )}
            <div className="row">
              <div className="col m10">
                <a href={this.props.liveLink}>
                  <img
                    className="responsive-img z-depth-5 grow"
                    width="600px"
                    height="400px"
                    src={this.props.heroImg}
                    alt="project hero screenshot"
                  />
                </a>
              </div>
              <div className="col m2">
                <div id="tech-used">
                  <h5>Built with...</h5>
                  <ul style={{ color: "#555" }}>
                    {this.props.builtWith.map((tool, i) => <li key={i}> • {tool} </li>)}
                    <li>and more!</li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <h5>Summary</h5>
            <p style={{ lineHeight: "1.5", color: "#555" }} dangerouslySetInnerHTML={{__html: this.props.summary}} />
            <div className="row" id="supporting-images-row">
              <div className="project-supporting-image col m5 s12" id="supp-img-1">
                <img width="500" height="300" src={this.props.supportingImg1} alt="" />
              </div>
              <div className="project-supporting-image col m5 s12" id="supp-img-2">
                <img width="500" height="300" src={this.props.supportingImg2} alt="" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default PortfolioItem;
