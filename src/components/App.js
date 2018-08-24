import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import CurrencyValuesTable from "./CurrencyValuesTable";

class App extends Component {
  componentWillMount() {
    this.props.getValues();
    console.log(this.props.currencies);
  }

  render() {
    return (
      <div>
        <CurrencyValuesTable />
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
