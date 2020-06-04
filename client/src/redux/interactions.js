import getWeb3 from '../getWeb3';
import { web3Connected, accountConnected, hideLoading, showLoading } from './actions';

export const loadWeb3 = async (dispatch) => {
    const web3 = await getWeb3();
    dispatch(web3Connected(web3));
    return web3;
}

export const loadAccount = async (dispatch, web3) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    dispatch(accountConnected(account));
    return account;
}

export const toggleLoading = async (dispatch, loading) => {
    loading ? dispatch(showLoading()) : dispatch(hideLoading());
}