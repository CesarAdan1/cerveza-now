import React, { createContext, useState, useEffect } from 'react';
import { getLatestValue } from '../../services/fixer_api';
import c3 from "c3"
import 'c3/c3.css';

export const DataContext = createContext({});

const DataProvider = (props) => {

    const datos = {
        data: {
            dataMXN: {},
            dataOne: {},
            dataSecond: {},
            dataThree: {},
            dataFour: {},
            dataUS: {},
            dataOneUS: {},
            dataSecondUS: {},
            dataThreeUS: {},
            dataFourUS: {},
            dataGBP: {},
            dataOneGBP: {},
            dataSecondGBP: {},
            dataThreeGBP: {},
            dataFourGBP: {},
            dataEUR: {},
            dataOneEUR: {},
            dataSecondEUR: {},
            dataThreeEUR: {},
            dataFourEUR: {},
            dataRUS: {},
            dataOneRUS: {},
            dataSecondRUS: {},
            dataThreeRUS: {},
            dataFourRUS: {},
        }
    }

    const [data, setData] = useState({...datos})
    const [currencyDefault, setCurrencyDefault] = useState("");
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);

    const latest = 'latest'
    const oneYear = '2020-12-24'
    const twoYear = '2019-12-24'
    const threeYear = '2018-12-24'
    const fourYear = '2017-12-24'
 
    const convertToPeso = (mx, rate) => {
        let value = (mx / rate).toFixed(4)
        return value
    }

    const getLatestValues = async () => {

        try {
            setLoading(true)

            const data = await getLatestValue(latest);
            const onebefore = await getLatestValue(oneYear)
            const twobefore = await getLatestValue(twoYear)
            const threebefore = await getLatestValue(threeYear)
            const fourbefore = await getLatestValue(fourYear)

            const d = new Date(data.date).toUTCString()
            const day = (d.split('00')[0]);

            setLoading(false)
        
            setData({
                data: {
                    dataMX: data.rates.MXN,
                    dataOne: onebefore.rates.MXN,
                    dataSecond: twobefore.rates.MXN,
                    dataThree: threebefore.rates.MXN,
                    dataFour: fourbefore.rates.MXN,
                    dataUS: data.rates.USD,
                    dataOneUS: onebefore.rates.USD,
                    dataSecondUS: twobefore.rates.USD,
                    dataThreeUS: threebefore.rates.USD,
                    dataFourUS: fourbefore.rates.USD,
                    dataGBP: data.rates.GBP,
                    dataOneGBP: onebefore.rates.GBP,
                    dataSecondGBP: twobefore.rates.GBP,
                    dataThreeGBP: threebefore.rates.GBP,
                    dataFourGBP: fourbefore.rates.GBP,
                    dataEUR: data.rates.EUR,
                    dataOneEUR: onebefore.rates.EUR,
                    dataSecondEUR: twobefore.rates.EUR,
                    dataThreeEUR: threebefore.rates.EUR,
                    dataFourEUR: fourbefore.rates.EUR,
                    dataRUS: data.rates.RUB,
                    dataOneRUS: onebefore.rates.RUB,
                    dataSecondRUS: twobefore.rates.RUB,
                    dataThreeRUS: threebefore.rates.RUB,
                    dataFourRUS: fourbefore.rates.RUB
                }
            })
            setDate(day)

            setCurrencyDefault(convertToPeso(data.rates.EUR, data.rates.MXN))
          
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getLatestValues()
    }, [])

    const providerValue = {
        data,
        setData,
        date,
        currencyDefault,
        loading
    }

    return (
        <DataContext.Provider
            value={providerValue}
        >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;