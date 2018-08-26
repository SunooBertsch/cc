import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.admin ? this.props.admin.rates : {};
  }
  render() {
    console.log(this.state);
    const rates = this.props.admin.rates;
    return (
      <Form
        style={{ margin: "20px" }}
        onSubmit={e => {
          e.preventDefault();
          console.log("state", this.state);
          this.props.updateRates(this.state);
          e.target.reset();
        }}>
        <InputGroup row>
          <Label for="refreshRate" sm={4}>
            Refresh currency exchange rates every
          </Label>
          <Input
            type="number"
            id="refreshRate"
            placeholder={rates.refreshRate}
            onChange={e =>
              this.setState({ refreshRate: parseInt(e.target.value, 10) })
            }
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>seconds</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FormGroup row>
          <Label for="commission" sm={2}>
            Commission:
          </Label>
          <Col sm={2}>
            <Input
              type="number"
              name="commission"
              id="commission"
              placeholder={rates.commissionPct * 100}
              onChange={e =>
                this.setState({ commissionPct: e.target.value / 100 })
              }
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
              placeholder={rates.surcharge}
              onChange={e =>
                this.setState({ surcharge: parseInt(e.target.value, 10) })
              }
            />
          </Col>
          <Label sm={2}> USD</Label>
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
              placeholder={rates.minimalCommission}
              onChange={e =>
                this.setState({
                  minimalCommission: parseInt(e.target.value, 10)
                })
              }
            />
          </Col>
          <Label sm={2}> USD</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="margin" sm={2}>
            Buy/Sell rate margin:
          </Label>
          <Col sm={2}>
            <Input
              type="number"
              name="margin"
              id="margin"
              placeholder={rates.margin * 100}
              onChange={e => this.setState({ margin: e.target.value / 100 })}
            />
          </Col>
          <Label sm={2}> %</Label>
        </FormGroup>
        <Button>Update</Button>
      </Form>
    );
  }
}

function mapStateToProps({ admin }) {
  return { admin };
}

export default connect(mapStateToProps, actions)(AdminPanel);
