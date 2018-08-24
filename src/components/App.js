import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.getValues()}>Get Values</button>
      </div>
    );
  }
}

function mapStateToProps({ currencies }) {
  return {
    currencies
  };
}

export default connect(mapStateToProps, actions)(App);
