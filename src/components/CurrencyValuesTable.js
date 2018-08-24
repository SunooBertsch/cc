import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import config from "../config";
import { Table } from "reactstrap";

class CurrencyValues extends Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
  }
  createTable(props) {
    const table = config.variableCurrencies.map((type, i) => {
      return (
        <tr key={i}>
          <th cope="row">{i}</th>
          <td>{type.currency}</td>
          <td>
            {this.props.currencies.quotes
              ? this.props.currencies.quotes[type.code]
              : ""}
          </td>
        </tr>
      );
    });
    return table;
  }
  render() {
    console.log("Props in component", this.props);

    return (
      <div>
        <Table bordered>
          <tbody>{this.createTable()}</tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ currencies }) {
  return {
    currencies
  };
}

export default connect(mapStateToProps, actions)(CurrencyValues);
