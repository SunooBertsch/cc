import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import config from "../config";
import { Table } from "reactstrap";

class CurrencyValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false,
      activeId: null,
      transactionType: ""
    };
    this.createTable = this.createTable.bind(this);
    this.selectCell = this.selectCell.bind(this);
  }

  selectCell(id, type) {
    this.setState({
      popupOpen: true,
      activeId: id,
      transactionType: type
    });
  }

  createTable(props) {
    const table = config.variableCurrencies.map((type, i) => {
      const value = this.props.currencies.quotes
        ? this.props.currencies.quotes[type.abbr]
        : 0;
      return (
        <tr key={i}>
          <td cope="row">{i + 1}</td>
          <td>{type.abbr.substring(3, 6)}</td>
          <td onClick={() => this.selectCell(i, "buy")}>
            {(value - value / (100 - 2)).toFixed(4)}
          </td>
          <td onClick={() => this.selectCell(i, "sell")}>
            {(value + value / (100 + 2)).toFixed(4)}
          </td>
          <td>{value}</td>
        </tr>
      );
    });
    return table;
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Currency</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Amount</th>
            </tr>
          </thead>
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
