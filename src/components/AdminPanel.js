import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.admin ? this.props.admin.rates : {};

    this.checkInputValues = this.checkInputValues.bind(this);
  }

  checkInputValues(state) {
    if (
      state.commissionPct < 0 ||
      state.surcharge < 0 ||
      state.minimalCommission < 0 ||
      state.margin < 0 ||
      state.refreshRate < 1
    ) {
      return alert(
        "Rates must be positive numbers, and refresh rate must be at least 1 second"
      );
    } else {
      this.props.updateRates(this.state);
      return alert("Rates updated.");
    }
  }

  render() {
    const rates = this.props.admin.rates;
    return (
      <div style={{ marginTop: "50px" }}>
        <Form
          className="col-sm-6"
          onSubmit={e => {
            e.preventDefault();
            this.checkInputValues(this.state);
          }}>
          <FormGroup>
            <InputGroup>
              <Label for="refreshRate" sm={12} md={6}>
                Refresh currency exchange rates every
              </Label>
              <Input
                type="number"
                name="refreshRate"
                id="refreshRate"
                placeholder={rates.refreshRate}
                onChange={e =>
                  this.setState({
                    refreshRate: parseInt(e.target.value, 10)
                  })
                }
              />
              <Label sm={2}> seconds </Label>
            </InputGroup>
            <br />
            <InputGroup>
              <Label for="commission" sm={12} md={6}>
                Commission:
              </Label>
              <Input
                type="number"
                name="commission"
                id="commission"
                placeholder={rates.commissionPct * 100}
                onChange={e =>
                  this.setState({ commissionPct: e.target.value / 100 })
                }
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>%</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
              <Label for="surcharge" sm={12} md={6}>
                Surcharge:
              </Label>
              <Input
                type="number"
                name="surcharge"
                id="surcharge"
                placeholder={rates.surcharge}
                onChange={e =>
                  this.setState({ surcharge: parseInt(e.target.value, 10) })
                }
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
              <Label for="Minimal Commission" sm={12} md={6}>
                Minimal Commission:
              </Label>
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
              <InputGroupAddon addonType="append">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
              <Label for="margin" sm={12} md={6}>
                Buy/Sell rate margin:
              </Label>
              <Input
                type="number"
                name="margin"
                id="margin"
                placeholder={rates.margin * 100}
                onChange={e => this.setState({ margin: e.target.value / 100 })}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>%</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <Button>Update</Button>
        </Form>
        <div className="col-sm-6" />
      </div>
    );
  }
}

function mapStateToProps({ admin }) {
  return { admin };
}

export default connect(mapStateToProps, actions)(AdminPanel);
