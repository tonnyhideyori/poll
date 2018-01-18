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
          <li >
            <a href="/auth/google">
      
                Login with&nbsp;<i class="fa fa-google-plus color:red"></i>
            </a>
          </li>
        );
      default:
        return [
          <li  key="1"><a href="#"><span class="glyphicon glyphicon-user"></span>{this.props.auth.name}</a></li>,
          <li  key="2">
           <a href="/api/logout" ><span class="glyphicon glyphicon-log-in"></span>
              &nbsp; logout
            </a>
          </li>
        ];
    }
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">Kura</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        {this.renderContent()}
      </ul>
    </div>
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
