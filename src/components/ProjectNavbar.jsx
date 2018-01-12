import React from "react";
import { Link } from "react-router-dom";

class ProjectNavbar extends React.Component {
  render() {
    return (
      <nav className="project-navbar">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
        <div className="container">
          <div className="nav-wrapper">
            <a href="/#" className="brand-logo">
              {/* <i className="fa fa-home" style={{fontSize:"3rem"}}></i> */}

              <svg
                version="1.0"
                xmlns="https://www.w3.org/2000/svg"
                width="50.000000px"
                height="50.000000px"
                viewBox="0 0 150.000000 150.000000"
                preserveAspectRatio="xMidYMid meet"
                className="hvr-float"
              >
                <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)" fill="#ffff" stroke="none">
                  <path d="M562 1344 c-175 -59 -313 -192 -373 -359 -30 -84 -37 -247 -15 -335
52 -207 216 -371 422 -424 78 -20 212 -21 287 -1 205 53 370 218 422 420 18
71 20 198 5 275 -28 133 -131 280 -253 360 -139 91 -340 117 -495 64z m38
-339 c0 -80 3 -145 8 -144 4 0 64 64 133 142 l125 142 79 3 78 3 -84 -91 c-46
-50 -106 -116 -132 -146 l-48 -54 136 -176 c75 -97 139 -182 142 -190 4 -11
-9 -14 -68 -14 l-74 1 -100 135 c-55 74 -106 140 -113 146 -10 8 -21 3 -47
-22 l-35 -34 0 -113 0 -113 -65 0 -65 0 0 335 0 335 65 0 65 0 0 -145z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default ProjectNavbar;
