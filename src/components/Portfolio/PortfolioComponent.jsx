import React from "react";

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container portfolio-project-page">
        <h3>Project Title</h3>
        <p>brief description of project. 1 sentence</p>

        <a href="">See it live</a> <br/>
        <a href="">Check it out on github </a>
        <div class="project-hero-image">
          <img src="" alt="" width="200" height="200" />
        </div>
        <h5>Summary</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo placeat dicta repellendus omnis
          quibusdam at nihil quod nisi quasi. Eligendi consectetur placeat ad non molestiae voluptatibus minus
          recusandae autem.
        </p>
        <div className="row">
          <div class="project-supporting-image col m5 s12">
            <img src="" alt="" width="200" height="200" />
          </div>

          {/* /need to pull this over 1 */}
          <div class="project-supporting-image col m5 s12">
            <img src="" alt="" width="200" height="200" />
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
