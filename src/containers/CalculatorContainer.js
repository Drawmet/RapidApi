import {connect} from 'react-redux';

import Calculator from '../components/Calculator';
import * as currencyActions from '../store/actions/currencyActions';

const mapStateToProps = (state) => ({
    ...state.currency
});

const mapDispatchToProps = (dispatch) => ({
    getExchangeCurrency: (currentCurrencies, newCurrencies, value) => 
        dispatch(currencyActions.getExchangeCurrencyAction(currentCurrencies, newCurrencies, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);