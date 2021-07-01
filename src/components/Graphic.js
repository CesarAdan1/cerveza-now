import React, { useState, useEffect, useContext } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

const Graphic = (props) => {
    const { baseName, date, MXNValue, currencies, curValues } = props;

      const dataGraph = [
        ["MXN", MXNValue],
        [currencies, curValues],
       
      ]

    useEffect(() => {

       
        c3.generate({
            bindto: "#chart",
            data: {
                columns: dataGraph,
            type: "line"
            }
        })
    }, []);

    return (
        <div>

           <div id="chart">

        </div>  
        </div>
       
    )
}

export default Graphic;