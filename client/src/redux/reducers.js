import { combineReducers } from 'redux';

function web3Reducer(state = {}, action) {
    switch (action.type) {
        case 'WEB3_CONNECTED':
            const { connection } = action;
            return { ...state, connection };
        case 'ACCOUNT_CONNECTED':
            const { account } = action;
            return { ...state, account };
        default:
            return state;
    }
}

function loadingReducer(state = {}, action) {
    switch (action.type) {
        case 'SHOW_LOADING':
            return { ...state, loading: true };
        case 'HIDE_LOADING':
            return { ...state, loading: false };
        default:
            return state;
    }
}

const rootReducer = new combineReducers({
    web3Reducer,
    loadingReducer
})

export default rootReducer;