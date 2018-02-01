import React from "react";

class ContactSection extends React.Component {

  render() {
    const form = (
      <form
        action="https://formspree.io/belfortk@gmail.com"
        method="POST"
        className="col s12"
      >
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <label htmlFor="icon_prefix"> Name</label>
            <input name="name" id="icon_prefix" type="text" className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input name="_replyto" id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">mode_edit</i>
            <label htmlFor="textarea1">Message</label>
            <textarea name="message" id="textarea1" className="materialize-textarea" />
          </div>
        </div>
        <a className="waves-effect waves-light btn">
          <input type="submit" value="Send" />
        </a>
        <input type="hidden" name="_next" value="//kylebelfort.com" />
      </form>
    );
    
    return (
      <div id="contact-section" className="container">
        <h4>Let's chat</h4>
        <div className="row">{ form }</div>
      </div>
    );
  }
}

export default ContactSection;
