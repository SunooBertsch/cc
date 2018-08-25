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
  }

  render() {
    const selectedCurrency = this.props.site;
    const adminRates = this.props.admin.rates;
    const commissionAmount = Math.ceil(
      Math.max(
        selectedCurrency.amountUsd * adminRates.commissionPct +
          adminRates.surcharge,
        adminRates.minimalCommission
      ),
      2
    );
    const subtotal =
      selectedCurrency.amountUsd * selectedCurrency.popupStatus.exchangeRate;
    const popupHeader =
      selectedCurrency.popupStatus.transactionType.charAt(0).toUpperCase() +
      selectedCurrency.popupStatus.transactionType.substring(
        1,
        selectedCurrency.popupStatus.transactionType.length
      ) +
      " " +
      selectedCurrency.popupStatus.country;

    return (
      <Form
        className="col-sm-6"
        onSubmit={e => {
          e.preventDefault();
          this.props.updateInventory({
            amount: this.state.amount,
            country: selectedCurrency.popupStatus.country,
            currentInventory: this.props.inventory,
            transactionType: selectedCurrency.popupStatus.transactionType
          });
        }}>
        <FormGroup row>
          <h4 xs={9}>{popupHeader}</h4>
          <Button xs={3} className="ml-auto" onClick={this.props.closePopup}>
            X
          </Button>
        </FormGroup>
        <FormGroup row style={{ margin: "5px" }}>
          <Label for="amountToBuy">Amount to buy:</Label>
          <Input
            type="number"
            name="amountToBuy"
            id="amountToBuy"
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
          <Label sm={4}>{selectedCurrency.popupStatus.exchangeRate}</Label>
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

function mapStateToProps({ site, admin, inventory }) {
  return { site, admin, inventory };
}

export default connect(mapStateToProps, actions)(CurrencyPopup);
