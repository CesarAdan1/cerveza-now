import { key } from '../constants/constants'


export const getLatestValue= async (latest) => {
    try {
        const getData = `http://data.fixer.io/api/${latest}?access_key=${key}&base=EUR&symbols=MXN,USD,CAD,EUR,RUB,GBP`
        const response = await fetch(getData)
        const data = response.json()
     
        return data

    } catch(e) {
       throw new Error(e)
    }
}