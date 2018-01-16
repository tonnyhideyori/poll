import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/w3.css";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              <button className="waves-effect waves-light btn red">
                Login with google
              </button>
            </a>
          </li>
        );
      default:
        return [
          <li key="1">{this.props.auth.name}</li>,
          <li key="2">
           <a href="/api/logout" > <button className="waves-effect waves-light btn black white-text">
              logout
            </button></a>
          </li>
        ];
    }
  }
  render() {
    return (
      <div>
        {" "}
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Kura
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
