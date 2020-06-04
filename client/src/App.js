import React, { Component } from "react";
import { connect } from "react-redux";
import { loadWeb3, loadAccount, toggleLoading } from "./redux/interactions";
import { web3Selector, accountSelector, loadingSelector } from "./redux/selectors";
import { subscribeToAccountsChanging } from "./redux/subscriptions";

import "./App.css";

class App extends Component {

  componentDidMount = async () => {
    const { dispatch } = this.props;
    await toggleLoading(dispatch, true);
    const web3 = await loadWeb3(dispatch);
    await loadAccount(dispatch, web3);
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
    account: accountSelector(state),
    loading: loadingSelector(state),
  }
}

export default connect(mapStateToProps)(App);
