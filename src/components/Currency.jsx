import React, { Component } from "react";
import axios from "axios";

class Currency extends Component {
  state = {
    currencyFromType: "LKR",
    currencyToType: "",
    currencyFromValue: 0,
    currencyToValue: 0,
  };

  convertCurrency = async (e) => {
    e.preventDefault();

    const { currencyFromType, currencyToType, currencyFromValue } = this.state;

    // validate
    if (currencyFromType === currencyToType) return;

    if (
      currencyFromType === "" ||
      currencyFromType === "0" ||
      currencyToType === "" ||
      currencyToType === "0" ||
      !currencyFromValue ||
      isNaN(currencyFromValue)
    ) {
      alert("Error, Please enter valid data");
      return;
    }

    // proceed
    const API_KEY = "0q9edji9qf8jetkp1a15";
    let { data } = await axios.get(
      "https://currencydatafeed.com/api/data.php?token=" +
        API_KEY +
        "&currency=" +
        currencyFromType +
        "/" +
        currencyToType
    );
    let rate = data.currency[0].value;
    let convertedAmount = currencyFromValue * rate;
    this.setState({ currencyToValue: convertedAmount.toFixed(2) });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1 className="p-4">Currency</h1>
        <div className="currency-content p-4">
          <form>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="comboCurrenyFrom">Currency Type</label>
                <select
                  id="comboCurrenyFrom"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ currencyFromType: e.target.value });
                  }}
                  defaultValue={"LKR"}
                >
                  <option value="0">- please select -</option>
                  <option value="LKR">LKR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                </select>
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="txtCurValFrom">Amount</label>
                <input
                  type="number"
                  id="txtCurValFrom"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ currencyFromValue: e.target.value });
                  }}
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="comboCurrenyTo">Currency Type</label>
                <select
                  id="comboCurrenyTo"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ currencyToType: e.target.value });
                  }}
                  defaultValue="0"
                >
                  <option value="0">- please select -</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                  <option value="LKR">LKR</option>
                </select>
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="txtConvertedAmount">Converted Amount</label>
                <input
                  disabled={true}
                  type="number"
                  id="txtConvertedAmount"
                  className="form-control"
                  value={this.state.currencyToValue}
                />
              </div>

              <div className="form-group col-md-12">
                <a
                  href="#"
                  onClick={this.convertCurrency}
                  className="btn btn-primary float-right"
                >
                  Convert
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Currency;
