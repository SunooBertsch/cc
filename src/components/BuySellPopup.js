import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as actions from "../actions";

class CurrencyPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const selectedCell = this.props.popup;
    const subtotal =
      selectedCell.amountUsd *
      this.props.currencyRates.quotes["USD" + selectedCell.popupConfig.country];
    if (
      selectedCell.popupConfig.transactionType === "buy" &&
      subtotal > this.props.inventory.USD
    ) {
      alert("Insufficient funds to complete transaction.");
    } else if (
      selectedCell.popupConfig.transactionType === "buy" &&
      subtotal <= this.props.inventory.USD
    ) {
      this.props.updateInventory({
        amount: this.state.amount,
        country: selectedCell.popupConfig.country,
        currentInventory: this.props.inventory,
        transactionType: selectedCell.popupConfig.transactionType,
        subtotal: subtotal.toFixed(2)
      });
    }

    if (
      selectedCell.popupConfig.transactionType === "sell" &&
      this.state.amount > this.props.inventory[selectedCell.popupConfig.country]
    ) {
      alert(
        "Insufficient amount of selected currency available to complete transaction."
      );
    } else if (
      selectedCell.popupConfig.transactionType === "sell" &&
      this.state.amount <=
        this.props.inventory[selectedCell.popupConfig.country]
    ) {
      this.props.updateInventory({
        amount: this.state.amount,
        country: selectedCell.popupConfig.country,
        currentInventory: this.props.inventory,
        transactionType: selectedCell.popupConfig.transactionType,
        subtotal: subtotal.toFixed(2)
      });
    }
  }

  render() {
    const selectedCell = this.props.popup;
    const adminRates = this.props.admin.rates;
    const amountUsd = selectedCell.popupConfig.exchangeRate *
      this.state.amount
    const commissionAmount = Math.ceil(
      Math.max(
        amountUsd *
          adminRates.commissionPct +
          adminRates.surcharge,
        adminRates.minimalCommission
      ),
      2
    );
    const subtotal =
      selectedCell.amountUsd *
      this.props.currencyRates.quotes["USD" + selectedCell.popupConfig.country];
    const popupHeader =
      selectedCell.popupConfig.transactionType.charAt(0).toUpperCase() +
      selectedCell.popupConfig.transactionType.substring(
        1,
        selectedCell.popupConfig.transactionType.length
      ) +
      " " +
      selectedCell.popupConfig.country;
    const value = this.props.currencyRates.quotes
      ? this.props.currencyRates.quotes[
          "USD" + selectedCell.popupConfig.country
        ]
      : 0;
    const sellValue = (value + value / (100 + 2)).toFixed(4);
    const buyValue = (value - value / (100 - 2)).toFixed(4);
    return (
      <Form
        className="col-sm-6"
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmit();
        }}>
        <FormGroup row>
          <h4 xs={6}>{popupHeader}</h4>
          <Button xs={3} className="ml-auto" onClick={this.props.closePopup}>
            X
          </Button>
        </FormGroup>
        <FormGroup>
          <h6> USD Available: {this.props.inventory.USD.toFixed(2)}</h6>
        </FormGroup>
        <FormGroup row style={{ margin: "5px" }}>
          <Label for="amountToBuySell">
            {selectedCell.popupConfig.transactionType === "buy"
              ? "Amount to buy"
              : "Amount to sell"}:
          </Label>
          <Input
            type="number"
            name="amountToBuySell"
            id="amountToBuySell"
            placeholder="0.00"
            onChange={e => {
              this.setState({ amount: e.target.value });
              this.props.updateBuySellAmount(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup row>
          <Label for="exchangeRate" sm={8}>
            Exchange Rate
          </Label>
          <Label sm={4}>
            {selectedCell.popupConfig.transactionType === "sell"
              ? sellValue
              : buyValue}
          </Label>
        </FormGroup>
        <FormGroup row>
          <Label for="subtotal" sm={8}>
            Subtotal
          </Label>
          <Label sm={4}>{isNaN(subtotal) ? 0 : subtotal.toFixed(2)}</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="commission" sm={8}>
            Commission:
          </Label>
          <Label sm={4}>
            {isNaN(commissionAmount) ? 0 : commissionAmount + ".00"}
          </Label>
        </FormGroup>
        <Button color="primary">Submit</Button>
        <Button color="danger" onClick={this.props.closePopup}>
          Cancel
        </Button>
      </Form>
    );
  }
}

function mapStateToProps({ popup, admin, inventory, currencyRates }) {
  return { popup, admin, inventory, currencyRates };
}

export default connect(mapStateToProps, actions)(CurrencyPopup);
