import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as actions from "../actions";

class CurrencyPopup extends React.Component {
  render() {
    const state = this.props.site;
    const commissionAmount = Math.ceil(
      Math.max(
        state.amountUsd * this.props.admin.rates.commissionPct +
          this.props.admin.rates.surcharge,
        this.props.admin.rates.minimalCommission
      ),
      2
    );
    const subtotal = state.amountUsd * state.popupStatus.exchangeRate;
    const popupHeader =
      state.popupStatus.transactionType.charAt(0).toUpperCase() +
      state.popupStatus.transactionType.substring(
        1,
        state.popupStatus.transactionType.length
      ) +
      " " +
      state.popupStatus.country;
    return (
      <Form bordered className="col-sm-6">
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
              this.props.updateBuySellAmount(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup row>
          <Label for="exchangeRate" sm={8}>
            Exchange Rate
          </Label>
          <Label sm={4}>{state.popupStatus.exchangeRate}</Label>
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

function mapStateToProps({ site, currencies, admin }) {
  return { site, currencies, admin };
}

export default connect(mapStateToProps, actions)(CurrencyPopup);
