import React, { Component } from "react";
import { connect } from "react-redux";
import CurrencyValuesTable from "./CurrencyValuesTable";
import Header from "./Header";
import AdminPanel from "./AdminPanel";
import * as actions from "../actions";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
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

function mapStateToProps({ admin }) {
  return { admin };
}

export default connect(mapStateToProps, actions)(App);
