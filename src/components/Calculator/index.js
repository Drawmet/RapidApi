import React, { Component } from 'react';

import Dropdown from '../Common/Dropdown';

import {
    CryptoConsts,
    CurrencyConst,
    CALCULATOR_TITLE
} from '../../utils/consts';

class Calculator extends Component {

    state = {
        cryptoCurrency: CryptoConsts[0],
        currencyValue: CurrencyConst[0],
        value: 0
    }

    handleExchangeButton = (e) => {
        e.preventDefault();

        const { getExchangeCurrency } = this.props;

        const {
            cryptoCurrency,
            currencyValue,
            value
        } = this.state;

        getExchangeCurrency(cryptoCurrency, currencyValue, value);
    }

    render() {
        const { currencyValue } = this.state;
        const { currency } = this.props;

        return (
            <div className='calculator'>
                <form>
                    <p className='title'>{CALCULATOR_TITLE}</p>
                    <Dropdown
                        data={CryptoConsts}
                        onChange={(e) => this.setState({ cryptoCurrency: e.target.value })}
                    />
                    <button
                        className='exchange_button'
                        onClick={this.handleExchangeButton}
                    >Exchange</button>
                    <Dropdown
                        data={CurrencyConst}
                        onChange={(e) => this.setState({ currencyValue: e.target.value })}
                    />
                    <input
                        className='input_text'
                        type="text"
                        onChange={(e) => this.setState({ value: parseFloat(e.target.value) })}
                    />
                    <p className='input_text'>{`${parseFloat(currency).toFixed(2)} ${currencyValue}`}</p>
                </form>
            </div>
        );
    }
}

export default Calculator;