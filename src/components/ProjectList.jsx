import React from "react";
import { Link } from "react-router-dom";
import projects from "../Projects/projects.js";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>Hey. You're not supposed to be here.</h4>
        <h6>Try going to any one of these detailed project pages:</h6>
        <ul>
          {projects().map(project => {
            return (
              <li>
                <Link to={`/projects/${project.url}`}>{project.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
