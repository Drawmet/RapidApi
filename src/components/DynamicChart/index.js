import React from 'react';
import Websocket from 'react-websocket';
import { Line } from 'react-chartjs-2';

class DynamicChart extends React.Component {

    state = {
        currencyData: []
    };

    handleData = (data) => {
        const { currencyData } = this.state;
        const result = JSON.parse(data);

        if (currencyData && currencyData.length < 20) {
            this.setState({
                currencyData: [
                    ...currencyData,
                    result.events[0].price
                ]
            });
        }
        else {
            this.setState({
                currencyData: currencyData.map((item, index) => {
                    if (index < 19) {
                        return currencyData[index + 1];
                    }
                    else {
                        return result.events[0].price;
                    }
                })
            })
        }
    }

    render() {
        const { currencyData } = this.state;

        const currencyChart = {
            labels: [...currencyData.map((item, index) => index)],
            datasets: [{
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
                data: currencyData
            }]
        }

        return (
            <div className="dynamic_chart">
                <Websocket
                    url='wss://api.gemini.com/v1/marketdata/BTCUSD'
                    onMessage={this.handleData}
                />
                <Line data={currencyChart} />
            </div>
        );
    }
}

export default DynamicChart;