import React from "react";

class AboutMeSection extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="summary-row" className="row">
          <div id="image-column" className="col m4 s12">
            <div className="circular-image grow2">
              <a href="https://linkedin.com/in/kyle-belfort" target="_blank" rel="noopener noreferrer">
                <img
                  alt="headshot of kyle belfort"
                  src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/15390648_10211684535494640_3504855358490384009_n.jpg?oh=7fc022ac083df1ea426a1cec0a78bb59&oe=5AB39DD7"
                />
              </a>
            </div>
          </div>
          <div id="hello-text" className="col m8 s12">
            <h3>Hello</h3>
            <p style={{ color: "#555" }}>
              I like to build things. I'm a full-stack web developer specializing in creating websites and front-end
              engineering. Educated as a biologist and trained as a data analyst. I'm well versed in Javascript, HTML,
              CSS. I have experience building with front-end frameworks and libraries like React, Angular, Bootstrap,
              Materialize, and with building single-page applications. On the backend, I use Node with Express and
              MongoDB or MySQL to manage and serve my data. I enjoy creating engaging applications that solve
              challenging or whimsical problems. Have a look at my <a href="/KyleBelfort_Resume.pdf" target="_blank" rel="noopener noreferrer">resume</a> to learn more.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeSection;
