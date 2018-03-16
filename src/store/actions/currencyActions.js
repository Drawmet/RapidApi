export const ACTION_REQUEST_GET_EXCHANGE_CURRENCY = 'ACTION_REQUEST_GET_EXCHANGE_CURRENCY';
export const ACTION_SUCCESS_GET_EXCHANGE_CURRENCY = 'ACTION_SUCCESS_GET_EXCHANGE_CURRENCY';
export const ACTION_FAILURE_GET_EXCHANGE_CURRENCY = 'ACTION_FAILURE_GET_EXCHANGE_CURRENCY';

export const ACTION_REQUEST_GET_EXCHANGE_CURRENCY_TABLE = 'ACTION_REQUEST_GET_EXCHANGE_CURRENCY_TABLE';
export const ACTION_SUCCESS_GET_EXCHANGE_CURRENCY_TABLE = 'ACTION_SUCCESS_GET_EXCHANGE_CURRENCY_TABLE';
export const ACTION_FAILURE_GET_EXCHANGE_CURRENCY_TABLE = 'ACTION_FAILURE_GET_EXCHANGE_CURRENCY_TABLE';

export const ACTION_REQUEST_GET_CURRENCY_CHART = 'ACTION_REQUEST_GET_CURRENCY_CHART';
export const ACTION_SUCCESS_GET_CURRENCY_CHART = 'ACTION_SUCCESS_GET_CURRENCY_CHART';
export const ACTION_FAILURE_GET_CURRENCY_CHART = 'ACTION_FAILURE_GET_CURRENCY_CHART';

function getExchangeCurrencyActionRequest(status) {
    return {
        type: ACTION_REQUEST_GET_EXCHANGE_CURRENCY,
        status: status
    }
}

function getExchangeCurrencyActionSuccess(currency) {
    return {
        type: ACTION_SUCCESS_GET_EXCHANGE_CURRENCY,
        payload: {
            currency: currency
        }
    }
}

function getExchangeCurrencyActionFailure(message) {
    return {
        type: ACTION_FAILURE_GET_EXCHANGE_CURRENCY,
        message: message
    }
}

export function getExchangeCurrencyAction(currentCurrencies, newCurrencies, value) {
    return dispatch => {
        dispatch(getExchangeCurrencyActionRequest('Get Exchange Currency'));
        fetch(`https://api.coinmarketcap.com/v1/ticker/${currentCurrencies}/?convert=${newCurrencies}`)
            .then((data) => data.json())
            .then((currency) =>
                dispatch(getExchangeCurrencyActionSuccess(currency[0][`price_${newCurrencies.toLowerCase()}`] * value)))
            .catch((error) => dispatch(getExchangeCurrencyActionFailure(error.message)));
    }
}

function getExchangeCurrencyTableActionRequest(status) {
    return {
        type: ACTION_REQUEST_GET_EXCHANGE_CURRENCY_TABLE,
        status: status
    }
}

function getExchangeCurrencyTableActionSuccess(currencyTable) {
    return {
        type: ACTION_SUCCESS_GET_EXCHANGE_CURRENCY_TABLE,
        payload: {
            currencyTable: currencyTable
        }
    }
}

function getExchangeCurrencyTableActionFailure(message) {
    return {
        type: ACTION_FAILURE_GET_EXCHANGE_CURRENCY_TABLE,
        message: message
    }
}

export function getExchangeCurrencyTableAction(newCurrencies) {
    return dispatch => {
        dispatch(getExchangeCurrencyTableActionRequest('Get Exchange Currency'));
        fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${newCurrencies}&limit=6`)
            .then((data) => data.json())
            .then((currency) => dispatch(getExchangeCurrencyTableActionSuccess(currency)))
            .catch((error) => dispatch(getExchangeCurrencyTableActionFailure(error.message)));
    }
}

function getCurrencyChartActionRequest(status) {
    return {
        type: ACTION_REQUEST_GET_CURRENCY_CHART,
        status: status
    }
}

function getCurrencyChartActionSuccess(currencyChart) {
    return {
        type: ACTION_SUCCESS_GET_CURRENCY_CHART,
        payload: {
            currencyChart: currencyChart
        }
    }
}

function getCurrencyChartActionFailure(message) {
    return {
        type: ACTION_FAILURE_GET_CURRENCY_CHART,
        message: message
    }
}

export function getCurrencyChartAction(period = 'Day') {
    return dispatch => {
        dispatch(getCurrencyChartActionRequest('Get Currency Chart'));

        let startDay;
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        let endDay = `${year}-0${month}-${day}`;

        switch (period) {
            case 'Day':
                startDay = `${year}-0${month}-${day-1}`;
                break;
            case 'Month':
                startDay = `${year}-0${month-1}-${day}`;
                break;
            case 'Year':
                startDay = `${year-1}-0${month}-${day}`;
                break;
            default:
                break;
        }

        fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDay}&end=${endDay}`)
            .then((data) => data.json())
            .then((currencyChart) => {
                const labels = Object.keys(currencyChart.bpi);
                const data = Object.values(currencyChart.bpi);
                const currencyChartData = {
                    labels: labels,
                    datasets: [{
                        label: currencyChart.disclaimer,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: data
                    }]
                };
                dispatch(getCurrencyChartActionSuccess(currencyChartData));
            })
            .catch((error) => dispatch(getCurrencyChartActionFailure(error.message)));
    }
}