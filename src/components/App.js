import React, { Component } from 'react';

import Calculator from '../containers/CalculatorContainer';
import './App.css';
import ExchangeTable from '../containers/ExchangeTableContainer';
import Chart from '../containers/ChartContainer';
import DynamicChart from '../components/DynamicChart';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Calculator />
                <ExchangeTable />
                <Chart />
                <DynamicChart />
            </div>
        );
    }
}

export default App;
