import { get } from 'lodash';
import { createSelector } from 'reselect';

const web3 = state => get(state, 'web3Reducer.connection', null);
export const web3Selector = createSelector(web3, w3 => w3);

const account = state => get(state, 'web3Reducer.account', null);
export const accountSelector = createSelector(account, acc => acc);

const loading = state => get(loading, 'loadingReducer.loading', null);
export const loadingSelector = createSelector(loading, l => l);

const contract = state => get(state, 'contractReducer.contract', null);
export const contractSelector = createSelector(contract, contr => contr);

const value = state => get(state, 'contractReducer.value', null);
export const valueSelector = createSelector(value, a => a);