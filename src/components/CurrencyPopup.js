import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as actions from "../actions";

class CurrencyPopup extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
        <Button onClick={this.props.closePopup}>Submit</Button>
      </Form>
    );
  }
}

function mapStateToProps({ site }) {
  return { site };
}

export default connect(mapStateToProps, actions)(CurrencyPopup);
