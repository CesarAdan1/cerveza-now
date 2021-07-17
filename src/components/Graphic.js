import React, { useEffect, useContext } from 'react';
import c3 from "c3"
import 'c3/c3.css';
import { DataContext } from '../state/context/DataContext'
import {getData} from '../constants/constants'

const Graphic = () => {
  const { data, setData } = useContext(DataContext);
  console.log(data)
 /* 
  const columns = [
    ['MXN', data.data.dataMX, data.data.dataOne, data.data.dataSecond, data.data.dataThree, data.data.dataFour],
    ['USD', data.data.dataUS, data.data.dataOneUS, data.data.dataSecondUS, data.data.dataThreeUS, data.data.dataFourUS],
    ['GBP', data.data.dataGBP, data.data.dataOneGBP, data.data.dataSecondGBP, data.data.dataThreeGBP, data.data.dataFourGBP],
    ['EUR', data.data.dataEUR, data.data.dataOneEUR, data.data.dataSecondEUR, data.data.dataThreeEUR, data.data.dataFourEUR],
    ['RUB', data.data.dataRUS, data.data.dataOneRUS, data.data.dataSecondRUS, data.data.dataThreeRUS, data.data.dataFourRUS]
  ] 

  console.log(columns) 
 */
  const plotConfig = [
    { countries: 4, maxValue: 40 },
    { countries: 4, maxValue: 20 },
    { countries: 4, maxValue: 10 },
    { countries: 4, maxValue: 20 },
    { countries: 4, maxValue: 30 },
  ]

useEffect(() => {
    const interval = setInterval(() => {
      setData(
       getData(
         plotConfig
       )
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []) 

  let chart = c3.generate({
    bindto: "#chart",
    size: {
        width: 640, height: 400
    },
    data: {
        columns: data,
        type: "line",
    },
    //order: 'des'
});
  
useEffect(() => {
  chart
}, [data])

  return (
      <div id="chart" >
     
      </div>
  )
}

export default Graphic;