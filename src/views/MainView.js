import React, { useContext } from 'react';
import Graphic from '../components/Graphic';
import CurrencySelector from '../components/CurrencySelector';
import BaseCurrency from '../components/BaseComponent';
import { DataContext } from '../state/context/DataContext';
import getSymbolFromCurrency from "currency-symbol-map";

import '../styles/main.css';

const MainView = () => {
    const { data, loading, mxn, country, date, currencies } = useContext(DataContext); 
    console.log(data.rates);
    const rates = Object.keys(data)
    const vals = rates.map((rate, key) =>
        {rate}
    )

    return (
        <div className="main-view">
            <BaseCurrency 
                date={date} 
                currencyValue={mxn} 
                currencyDefault={country}
            />
            <div className="main-view--cont">
            {
                loading ? <div>Cargando...</div>
                : 
                <div>
                  <Graphic 
                    MXNValue={mxn}
                    currencies={currencies}
                    curValues={vals}
                  />  
                </div>
                
            }
                
            </div>
        </div>
    )
}

export default MainView
