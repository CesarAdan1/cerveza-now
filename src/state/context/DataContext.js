import React, { createContext, useState, useEffect, useContext } from 'react';
import { getRates, getLatestValue } from '../../services/fixer_api';
import { currencyName } from "../../constants";

export const DataContext = createContext({});

const datos = {
    data: {
        success: true,
        timestamp: 1593531365,
        base: "EUR",
        date: "2020-06-30",
        rates: {
          AED: 4.130151,
          AFN: 86.918444,
          ALL: 124.815565,
          AMD: 542.398467,
          ANG: 2.018621,
          AOA: 650.982217,
          ARS: 79.226812,
          AUD: 1.630123,
          AWG: 2.024041,
          AZN: 1.915801,
          BAM: 1.962168,
          BBD: 2.270635,
          BDT: 95.470983,
          BGN: 1.957145,
          BHD: 0.423906,
          BIF: 2152.230317,
          BMD: 1.124467,
          BND: 1.571304,
          BOB: 7.765183,
          BRL: 6.166803,
          BSD: 1.124532,
          BTC: 0.000123,
          BTN: 84.995545,
          BWP: 13.277389,
          BYN: 2.722795,
          BYR: 22039.558107,
          BZD: 2.266822,
          CAD: 1.530181,
          CDF: 2131.98989,
          CHF: 1.064848,
          CLF: 0.033469,
          CLP: 923.413419,
          CNY: 7.943348,
          COP: 4208.28495,
          CRC: 652.006109,
          CUC: 1.124467,
          CUP: 29.798382,
          CVE: 110.928999,
          CZK: 26.633016,
          DJF: 200.206705,
          DKK: 7.452183,
          DOP: 65.848946,
          DZD: 145.175461,
          EGP: 18.165521,
          ERN: 16.866911,
          ETB: 39.187632,
          EUR: 1,
          FJD: 2.447121,
          FKP: 0.908201,
          GBP: 0.908458,
          GEL: 3.45771,
          GGP: 0.908201,
          GHS: 6.516306,
          GIP: 0.908201,
          GMD: 58.024272,
          GNF: 10814.567999,
          GTQ: 8.65927,
          GYD: 235.149581,
          HKD: 8.715239,
          HNL: 28.066682,
          HRK: 7.56969,
          HTG: 123.046459,
          HUF: 354.207263,
          IDR: 16228.929814,
          ILS: 3.892345,
          IMP: 0.908201,
          INR: 84.929323,
          IQD: 1338.678262,
          IRR: 101455.057322,
          ISK: 155.524711,
          JEP: 0.908201,
          JMD: 157.278031,
          JOD: 0.797223,
          JPY: 121.174271,
          KES: 119.80823,
          KGS: 85.44681,
          KHR: 4604.69331,
          KMF: 493.247699,
          KPW: 1012.06349,
          KRW: 1349.220166,
          KWD: 0.346144,
          KYD: 0.937227,
          KZT: 456.524662,
          LAK: 10160.68568,
          LBP: 1704.824585,
          LKR: 209.415114,
          LRD: 224.1078,
          LSL: 19.531805,
          LTL: 3.32026,
          LVL: 0.680179,
          LYD: 1.579855,
          MAD: 10.904515,
          MDL: 19.292719,
          MGA: 4323.57623,
          MKD: 61.815225,
          MMK: 1541.809788,
          MNT: 3177.553424,
          MOP: 8.977157,
          MRO: 401.435197,
          MUR: 45.147032,
          MVR: 17.328211,
          MWK: 826.483455,
          MXN: 25.958079,
          MYR: 4.818395,
          MZN: 78.823062,
          NAD: 19.531833,
          NGN: 435.726343,
          NIO: 38.715445,
          NOK: 10.85505,
          NPR: 135.994498,
          NZD: 1.744223,
          OMR: 0.4329,
          PAB: 1.124633,
          PEN: 3.982903,
          PGK: 3.873801,
          PHP: 55.936608,
          PKR: 189.158087,
          PLN: 4.443231,
          PYG: 7643.788928,
          QAR: 4.094226,
          RON: 4.838577,
          RSD: 117.574601,
          RUB: 80.099229,
          RWF: 1068.243888,
          SAR: 4.218325,
          SBD: 9.373163,
          SCR: 19.791384,
          SDG: 62.211113,
          SEK: 10.461033,
          SGD: 1.568053,
          SHP: 0.908201,
          SLL: 10969.17779,
          SOS: 653.31525,
          SRD: 8.386274,
          STD: 24794.892536,
          SVC: 9.840788,
          SYP: 577.331951,
          SZL: 19.531553,
          THB: 34.712311,
          TJS: 11.591543,
          TMT: 3.935635,
          TND: 3.218164,
          TOP: 2.580715,
          TRY: 7.708831,
          TTD: 7.590017,
          TWD: 33.108256,
          TZS: 2606.515544,
          UAH: 30.00151,
          UGX: 4192.442301,
          USD: 1.124467,
          UYU: 47.316842,
          UZS: 11444.827418,
          VEF: 11.230612,
          VND: 26161.292813,
          VUV: 130.895054,
          WST: 3.006552,
          XAF: 658.094481,
          XAG: 0.061755,
          XAU: 0.000631,
          XCD: 3.038929,
          XDR: 0.815047,
          XOF: 655.564371,
          XPF: 120.002588,
          YER: 281.509969,
          ZAR: 19.531692,
          ZMK: 10121.555596,
          ZMW: 20.420608,
          ZWL: 362.078456,
        },
      },
}
const DataProvider = (props) => {
    let dat = new Date()
    let day = dat.getDate()
    let month = dat.getMonth()
    let year = dat.getFullYear()
    let fullDate = `${day}/${month}/${year}`
    let today = new Date(date).toUTCString()

    const [data, setData] = useState(datos)
    const [graphicData, setGraphicData] = useState({
        referenceMex: [],
        referenceGlobal: []
    });
    const [currencyDefault, setCurrencyDefault] = useState("");
    const [currencyValue, setCurrencyValue] = useState("");
    const [currencies, setCurrencies] = useState([]);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState([])
    const [mxn, setMexico] = useState("")

    const getLatestValues = async () => {
        try {

            setLoading(true);
            const data = await getLatestValue();
            const d = new Date(data.date).toUTCString()
            setDate(d)
            setCountry(data.rates.EUR)
            setMexico(data.rates.MXN)
            
            const currencies = currencyName.symbols
            setData({
                currencyDefault: currencies

            })

            setLoading(false);

        } catch (err) {
            console.log(err)
        }
    }

    const getReferencesGraph = () => {
        setLoading(true)
      
        setLoading(false)
    }

    useEffect(() => {
        getLatestValues()
        getReferencesGraph()
    }, [])

    const providerValue = {
        data,
        date,
        mxn,
        country,
        currencies,
        currencyValue,
        loading,
        currencyDefault
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