import React from "react";

class AboutMeSection extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="summary-row" className="row">
          <div id="image-column" className="col m4 s12">
            <div className="circular-image grow2">
              <a
                href="https://linkedin.com/in/kyle-belfort"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="headshot of kyle belfort" src="images/headshot.jpg" />
              </a>
            </div>
          </div>
          <div id="hello-text" className="col m8 s12">
            <h3>Hello</h3>
            <p style={{ color: "#555" }}>
              I like to build things. I'm a full-stack developer specializing in
              creating websites and front-end engineering. Educated as a
              biologist and trained as a data analyst. I enjoy creating engaging
              applications that solve challenging or whimsical problems. Hiker.
              Volleyball player. Board game enthusiast. Tea drinker. Have a look at my {" "}
              <a
                href="https://gist.github.com/belfortk/8537c94b969cbc60426b3c263e1ff567"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </a>{" "}
              to learn more.
            </p>
            <p style={{ color: "#555" }}>
              Professional experience with: VanillaJS, React + Redux, Angular 7,
              AnjularJS, and VueJS Ruby + Rails, Node.js Postgres, MongoDB.
            </p>
            <p style={{ color: "#555" }}>
              Currently employed as a software engineer at{" "}
              <a href="https://moxiworks.com/">MoxiWorks</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeSection;
