import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as actions from "../actions";

class CurrencyPopup extends React.Component {
  render() {
    const state = this.props.site.popupStatus;
    console.log(this.props);
    return (
      <Form className="col-sm-6">
        <FormGroup row>
          <Label for="amountToBuy">Amount to buy:</Label>
          <Input
            type="number"
            name="amountToBuy"
            id="amountToBuy"
            placeholder="0.00"
          />
        </FormGroup>
        <FormGroup row>
          <Label for="exchangeRate" sm={8}>
            Exchange Rate
          </Label>
          <Label sm={4}>{state.exchangeRate}</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="subtotal" sm={8}>
            Subtotal
          </Label>
          <Label sm={4}>{state.country}</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="commission" sm={8}>
            Commission:
          </Label>
          <Label sm={4}>2.00</Label>
        </FormGroup>
        <Button color="primary">Submit</Button>
        <Button color="danger" onClick={this.props.closePopup}>
          Cancel
        </Button>
      </Form>
    );
  }
}

function mapStateToProps({ site, currencies }) {
  return { site, currencies };
}

export default connect(mapStateToProps, actions)(CurrencyPopup);
