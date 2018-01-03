import React from "react";

class AboutMeSection extends React.Component {

  render() {
    return (
      <div id="about">
        <div id="summary-row" className="row">
          <div id="image-column" className="col m4 s12">
            <div className="circular-image">
            <a href="https://linkedin.com/in/kyle-belfort">
              <img alt="headshot of kyle belfort" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/15390648_10211684535494640_3504855358490384009_n.jpg?oh=7fc022ac083df1ea426a1cec0a78bb59&oe=5AB39DD7" />
            </a>
            </div>
          </div>
          <div id="hello-text" className="col m8 s12">
            <h3>Hello</h3>
            <p>
              I like to build things. I'm a full-stack web developer specializing in creating websites and front-end
              engineering. I'm versed in Javascript, Java and HTML/CSS. I have experience building with front-end
              frameworks like React, Bootstrap, and Bulma, building single-page applications, and creating data
              visualization in D3. On the backend, I use Node with Express and MongoDB or MySql to manage and serve my
              data.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeSection;
