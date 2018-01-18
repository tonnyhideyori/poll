import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Kura na Maswali Fikirishi kwa jamii</h2>
        <h2>In-depth discussions Perspectives and opinions that matter</h2>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Landing);
