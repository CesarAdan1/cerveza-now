import React from "react";
import { mexicoFlag } from '../constants';

const BaseCurrency = (props) => {
    const { date, currencyDefault } = props;

    return (
        <div className="main-view--1">
            <span className="main-view--mxn">
                <span style={{ margin: '0 10px' }}>{date}</span>
                <span className="main-view--cu">
                    {" "}{""}{"1 Peso mexicano "} <img src={mexicoFlag} width="20" height="14" />
                    <span className="main-view--cude"><span>{"= "}</span>{`${currencyDefault} EUR`}</span>
                </span>
            </span>
        </div>
    )
}

export default BaseCurrency;