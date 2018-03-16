import {connect} from 'react-redux';

import ExchangeTable from '../components/ExchangeTable';
import * as currencyActions from '../store/actions/currencyActions';

const mapStateToProps = (state) => ({
    ...state.currency
});

const mapDispatchToProps = (dispatch) => ({
    getExchangeCurrencyTable: (newCurrencies) => 
        dispatch(currencyActions.getExchangeCurrencyTableAction(newCurrencies)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExchangeTable);