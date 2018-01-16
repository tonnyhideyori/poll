import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>KURA TZ</h1>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Landing);
