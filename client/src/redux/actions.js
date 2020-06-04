export function web3Connected(connection) {
    return {
        type: 'WEB3_CONNECTED',
        connection
    }
}

export function accountConnected(account) {
    return {
        type: 'ACCOUNT_CONNECTED',
        account
    }
}

export function showLoading() {
    return {
        type: 'SHOW_LOADING'
    }
}

export function hideLoading() {
    return {
        type: 'HIDE_LOADING'
    }
}