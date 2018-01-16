import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Home</h1>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Home);
