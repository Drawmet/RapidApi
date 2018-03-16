export const CryptoConsts = [
    "bitcoin",
    "etherium",
    "ripple",
    "bitcoin-cash",
    "cardano",
    "litecoin"
];

export const CurrencyConst = [
    "USD",
    "RUB",
    "EUR"
];

export const PeriodConsts = [
    "Day",
    "Month",
    "Year"
];

export const CALCULATOR_TITLE = 'Cryptocurrency Converter Calculator';

export const FirstUpperLetter = (text) => text.split(' ')
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
