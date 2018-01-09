import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
        <div id="footer-row" className="row">
          <div className="col s4 icon-div">
            <a href="mailto:belfortk@gmail.com">
              <div id="email-icon">
                <svg className="animated pulse infinite" width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zM8 8h16c.286 0 .563.06.817.177L16 18.463 7.183 8.176C7.437 8.06 7.713 8 8 8zM6 22V10c0-.042.002-.084.004-.125l5.864 6.842-5.8 5.8c-.045-.167-.07-.34-.07-.517zm18 2H8c-.177 0-.35-.024-.517-.07l5.69-5.69L16 21.537l2.826-3.297 5.69 5.69c-.166.046-.34.07-.516.07zm2-2c0 .177-.024.35-.07.517l-5.8-5.8 5.866-6.842c.003.04.004.083.004.125v12z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="col s4">
            <a href="https://linkedin.com/in/kyle-belfort">
              <div id="linkedin-icon">
                <svg
                  className="animated pulse infinite"
                  id="linkedin-icon"
                  width="29.1"
                  height="26.2"
                  viewBox="883.5 867.8 29.1 26.2"
                  fill="#f5f5f5"
                >
                  <path d="M891.2 876.7v16H886v-16h5.2zm.4-5c0 .8-.3 1.4-.8 2-.6.5-1.3.8-2.2.8-1 0-1.7-.3-2.2-.8s-.8-1.2-.8-2 .2-1.5.8-2c.6-.5 1.3-.8 2.2-.8 1 0 1.6.2 2.2.7.5.5.8 1.2.8 2zm19 12v9h-5.4v-8.5c0-1.2-.2-2-.7-2.7-.4-.6-1-1-2-1-.7 0-1.3.2-1.7.6-.5.5-.8 1-1 1.5-.2.3-.2.8-.2 1.3v9h-5.4v-10.5-5.6h5.4v2.3c0-.3.4-.6.6-1l1-.7 1.3-.7c.6-.2 1.2-.3 2-.3 1.7 0 3.2.6 4.4 1.8 1 1.4 1.6 3.2 1.6 5.6z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="col s4">
            <a href="https://github.com/belfortk">
              <div id="github-icon">
                <svg
                  className="animated pulse infinite octicon octicon-mark-github"
                  height="32"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="32"
                  fill="#fff"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
