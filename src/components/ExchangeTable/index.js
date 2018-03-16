import React, { Component } from 'react';

import Dropdown from '../Common/Dropdown';
import { CurrencyConst } from '../../utils/consts';

class ExchangeTable extends Component {
    state = {
        selectCurrency: CurrencyConst[0]
    };

    componentDidMount() {
        const { getExchangeCurrencyTable } = this.props;

        getExchangeCurrencyTable(CurrencyConst[0]);
    }

    handleOnChange = (e) => {
        const { getExchangeCurrencyTable } = this.props;

        getExchangeCurrencyTable(e.target.value);

        this.setState({ selectCurrency: e.target.value });
    };

    renderTable = () => {
        const { currencyTable } = this.props;
        const { selectCurrency } = this.state;

        if (currencyTable.length > 0)
            return currencyTable.map((value, index) => {
                const valuePercentChangeColor = value.percent_change_24h > 0 ? 'green' : 'red';

                const price = parseFloat(value[`price_${selectCurrency.toLowerCase()}`]).toFixed(2);

                if (price !== 'NaN')
                    return (
                        <div 
                            className='exchange_table_item' 
                            key={`exchange_${index}`}
                        >
                            <p className='exchange_table_item_title'>{value.name}</p>
                            <p className='exchange_table_item_price'>{price}</p>
                            <p style={{ color: valuePercentChangeColor }}>{`${value.percent_change_24h}%`}</p>
                        </div>
                    )
                else
                    return (
                        <div>
                        </div>
                    )
            });
    };

    render() {
        return (
            <div className='exchange_table_container'>
                <Dropdown 
                    data={CurrencyConst} 
                    onChange={this.handleOnChange} 
                />
                {this.renderTable()}
            </div>
        );
    }
}

export default ExchangeTable;