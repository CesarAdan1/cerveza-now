import React, { useContext } from 'react';
import Graphic from '../components/Graphic';
import BaseCurrency from '../components/BaseComponent';
import { DataContext } from '../state/context/DataContext';

import '../styles/main.css';

const MainView = () => {
    const { loading, currencyDefault, date, data } = useContext(DataContext); 
    console.log(data )

   

    return (
        <div className="main-view">
            <BaseCurrency 
                date={date} 
                currencyDefault={currencyDefault}
            />
            <div className="main-view--cont">
            {
                loading ? <div>Cargando...</div>
                : 
                <div>
                  <Graphic />  
                </div>
                
            }
                
            </div>
        </div>
    )
}


export default MainView
