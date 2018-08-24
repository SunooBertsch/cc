import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import config from "../config";
import { Table } from "reactstrap";
import BuySellPopup from "./BuySellPopup";

class CurrencyValues extends Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup(id, type, country, exchangeRate) {
    const data = {
      popupOpen: true,
      activeId: id,
      transactionType: type,
      country,
      exchangeRate
    };
    this.props.selectCell(data);
  }

  createTable(props) {
    console.log(this.props);
    const table = config.variableCurrencies.map((type, i) => {
      const value = this.props.currencyRates.quotes
        ? this.props.currencyRates.quotes[type.abbr]
        : 0;
      return (
        <tr key={i}>
          <td cope="row">{i + 1}</td>
          <td>{type.abbr.substring(3, 6)}</td>
          <td
            onClick={() =>
              this.togglePopup(
                i,
                "buy",
                type.abbr.substring(3, 6),
                (value - value / (100 - 2)).toFixed(4)
              )
            }>
            {(value - value / (100 - 2)).toFixed(4)}
          </td>
          <td
            onClick={() =>
              this.togglePopup(
                i,
                "sell",
                type.abbr.substring(3, 6),
                (value + value / (100 + 2)).toFixed(4)
              )
            }>
            {(value + value / (100 + 2)).toFixed(4)}
          </td>
          <td>{this.props.inventory.currencies[type.abbr.substring(3, 6)]}</td>
        </tr>
      );
    });
    return table;
  }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
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
        <div className="row">
          <div className="col-sm-3" />
          {this.props.site.popupStatus.popupOpen ? (
            <BuySellPopup style={{ border: "solid grey 1px" }} />
          ) : (
            ""
          )}
          <div className="col-sm-3" />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currencyRates, site, admin, inventory }) {
  return {
    currencyRates,
    site,
    admin,
    inventory
  };
}

export default connect(mapStateToProps, actions)(CurrencyValues);
