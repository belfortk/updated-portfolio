import React from "react";
import Footer from "../Footer";

class PortfolioItem extends React.Component {

  render() {
    return (
      <div>
        <main>
          <div className="container portfolio-project-page">
            <h3> {this.props.title}</h3>
            <p> {this.props.description}</p>
            <a href={this.props.liveLink}>See it live</a> <br />
            {this.props.github ?         <a href={this.props.github}><img style={{"position": "absolute", "top": 0, "right": 0, "border": 0}} src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Check me out on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></img></a>
: <p style={{"position": "absolute", "top": 0, "right": 0, "border": 0, "marginRight": "1rem" }}>Sorry, this is a private repo! </p>}

            <div className="project-hero-image z-depth-5">
              <img className="responsive-img" src={this.props.heroImg} alt="project hero screenshot" />
            </div>
            <br />
            <br />
            <h5>Summary</h5>
            <p>{this.props.summary}</p>
            <div className="row" id='supporting-images-row'>
              <div className="project-supporting-image col m5 s12" id="supp-img-1">
                <img src={this.props.supportingImg1} alt="" />
              </div>
              <div className="project-supporting-image col m5 s12" id='supp-img-2'>
                <img src={this.props.supportingImg2} alt="" />
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
