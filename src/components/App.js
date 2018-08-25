import React, { Component } from "react";
import { connect } from "react-redux";
import CurrencyValuesTable from "./CurrencyValuesTable";
import Header from "./Header";
import AdminPanel from "./AdminPanel";
import * as actions from "../actions";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={CurrencyValuesTable} />
            <Route path="/admin" component={AdminPanel} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
