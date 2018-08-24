import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col
} from "reactstrap";

class AdminPanel extends Component {
  render() {
    return (
      <Form style={{ margin: "20px" }}>
        <FormGroup row>
          <Label for="commission" sm={2}>
            Commission:
          </Label>
          <Col sm={2}>
            <Input
              type="number"
              name="commission"
              id="commission"
              placeholder="0.00"
            />
          </Col>
          <Label sm={2}> %</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="surcharge" sm={2}>
            Surcharge:
          </Label>
          <Col sm={2}>
            <Input
              type="number"
              name="surcharge"
              id="surcharge"
              placeholder="0.00"
            />
          </Col>
          <Label sm={2}> %</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="Minimal Commission" sm={2}>
            Minimal Commission:
          </Label>
          <Col sm={2}>
            <Input
              type="number"
              name="minimalCommission"
              id="minimalCommission"
              placeholder="0.00"
            />
          </Col>
          <Label sm={2}> %</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="margin" sm={2}>
            Buy/Sell rate margin:
          </Label>
          <Col sm={2}>
            <Input type="number" name="margin" id="margin" placeholder="0.00" />
          </Col>
          <Label sm={2}> %</Label>
        </FormGroup>
        <Button onSubmit={this.props.updateRates}>Update</Button>
      </Form>
    );
  }
}

function mapStateToProps({ reducer }) {
  return { reducer };
}

export default connect(mapStateToProps, actions)(AdminPanel);
