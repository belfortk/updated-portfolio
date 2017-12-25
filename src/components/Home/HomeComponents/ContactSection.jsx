import React from "react";

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contact-section" className="container">
        <h4>Let's chat</h4>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <label htmlFor="icon_prefix"> Name</label>
                <input id="icon_prefix" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id="textarea1" className="materialize-textarea" />
                <label htmlFor="textarea1">Message</label>
              </div>
            </div>
            <a className="waves-effect waves-light btn">
              <i className="material-icons right">send</i>Send
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactSection;
