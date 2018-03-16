import {connect} from 'react-redux';

import Chart from '../components/Chart';
import * as currencyActions from '../store/actions/currencyActions';

const mapStateToProps = (state) => ({
    ...state.currency
});

const mapDispatchToProps = (dispatch) => ({
    getCurrencyChart: (period = 'Day') => dispatch(currencyActions.getCurrencyChartAction(period)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chart);