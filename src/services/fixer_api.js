import axios from 'axios'
//import { key } from '../constants'

const base_url = "http://data.fixer.io/api/"
const key = "f78dbb6528fa67e3bac6d21b87363f90"
export const getRates = async (day = "2013-12-24", symbols = "USD,CAD,,MXN,JPY,GBP,AUD,CAD,CHF,CNH,SEK,NZD,AED,EGP,NGN,ZAR", currency="EUR") => {
    try {
        const getData = `http://data.fixer.io/api/latest?access_key=${key}&base=${currency}&symbols=${symbols}`
        const response = await axios.get(getData)
        console.log("response " + response.data)
        return response.data

    } catch(e) {
       throw new Error(e)
    }
}

export const getLatestValue= async () => {
    try {
        const getData = `http://data.fixer.io/api/latest?access_key=${key}&format=1`
        const response = await axios.get(getData)

        console.log("responsesLast " + response.data)
        return response.data

    } catch(e) {
       throw new Error(e)
    }
}