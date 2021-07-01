import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { mexicoFlag } from '../constants';

const BaseCurrency = (props) => {
    const { date, currencyValue, currencyDefault } = props;
    const today = new Date(date).toUTCString();

    return (
        <div className="main-view--1">
            <span className="main-view--mxn">
            <span className="main-view--cur">Currency Reference</span>
            <img src={mexicoFlag} width="20" height="14" />
            {`${" "}${currencyValue} ${" "}`}{" "}
                <span className="main-view--cu">
                    {" "} con referencia a {" "}
                    <span className="main-view--cude">{`${currencyDefault} EUR`}</span>
                </span>
            </span>
        </div>
    )
}

export default BaseCurrency;