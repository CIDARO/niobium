import React, { Component } from "react";
import { connect } from "react-redux";
import { loadWeb3, loadAccount, toggleLoading, loadContract, loadStoredData } from "./redux/interactions";
import { web3Selector, accountSelector, loadingSelector, contractSelector, valueSelector } from "./redux/selectors";
import { subscribeToAccountsChanging } from "./redux/subscriptions";

import "./App.css";

class App extends Component {

  componentDidMount = async () => {
    const { dispatch } = this.props;
    await toggleLoading(dispatch, true);
    const web3 = await loadWeb3(dispatch);
    await loadAccount(dispatch, web3);
    const contract = await loadContract(dispatch, web3);
    await loadStoredData(dispatch, contract);
    subscribeToAccountsChanging(dispatch, web3);
    await toggleLoading(dispatch, false);
  };

  render() {
    if (this.props.loading) {
      return <div>Loading Web3 and accounts..</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Niobium Truffle Box is installed and ready.</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contract: contractSelector(state),
    account: accountSelector(state),
    value: valueSelector(state),
    loading: loadingSelector(state),
  }
}

export default connect(mapStateToProps)(App);
