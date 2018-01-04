import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PortfolioSection extends React.Component {

  render() {
    return (
      <div id="skills-section" className="container">
        <h4>Some of my projects:</h4> <br />
        <div id="project-cards">
          {this.props.store.projects.map((project, i) => {
            return (
              <div key={i} className="card hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={project.heroImg} alt="project screenshot"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {project.title}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <Link to={`/projects/${project.url}`} >Project Page</Link>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title white-text">
                    {project.title}
                    <i className="material-icons right">close</i>
                  </span>
                  <p>{project.description}</p>

                  <Link to={`/projects/${project.url}`} className="waves-effect waves-light btn">
                      <i className="material-icons right">navigate_next</i>See more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.home
  };
}

export default connect(mapStateToProps)(PortfolioSection);
