import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import Dropdown from '../Common/Dropdown';

import {PeriodConsts} from '../../utils/consts';



class Chart extends Component {

    state = {
        selectOption: PeriodConsts[0]
    };

    componentDidMount() {
        const { getCurrencyChart } = this.props;
        const { selectOption } = this.state;

        getCurrencyChart(selectOption);
    }

    handleOnChange = (e) => {
        const { getCurrencyChart } = this.props;

        getCurrencyChart(e.target.value);

        this.setState({selectOption: e.target.value});
    }

    render() {
        const { currencyChart } = this.props;

            return (
                <div className='chart_bar'>
                    <Dropdown 
                        data={PeriodConsts} 
                        onChange={this.handleOnChange}
                    />
                    <Line data={currencyChart} />
                </div>
            );
    }
}

export default Chart;