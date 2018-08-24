import React, { Component } from "react";
import { connect } from "react-redux";
import CurrencyValuesTable from "./CurrencyValuesTable";
import CurrencyPopup from "./CurrencyPopup";
import Header from "./Header";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.getValues();
    // this.timer = setInterval(() => {
    //   this.props.getValues();
    // }, 30000);
  }
  render() {
    return (
      <div>
        <Header />
        <CurrencyValuesTable />
      </div>
    );
  }
}

export default connect(null, actions)(App);
