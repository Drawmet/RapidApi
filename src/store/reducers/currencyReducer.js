import * as currencyActions from '../actions/currencyActions';

const initialState = {
    isLoading: false,
    currency: 0,
    currencyTable: [],
    currencyChart: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case currencyActions.ACTION_SUCCESS_GET_EXCHANGE_CURRENCY:
            return {
                ...state,
                isLoading: true,
                currency: action.payload.currency
            };
        case currencyActions.ACTION_SUCCESS_GET_EXCHANGE_CURRENCY_TABLE:
            return {
                ...state,
                isLoading: true,
                currencyTable: action.payload.currencyTable
            }
        case currencyActions.ACTION_SUCCESS_GET_CURRENCY_CHART:
            return {
                ...state,
                isLoading: true,
                currencyChart: action.payload.currencyChart
            }
        default:
            return state;
    }
}