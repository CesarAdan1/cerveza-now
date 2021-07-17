/**
 * This function takes an array of plot config and generates data to be supplied to C3 charts.
 * @param { plotConfigProps[] } plotConfig
 * interface plotConfigProps {
 *   length: number // length of the plot
 *   maxValue: number // max value of the plot
 * }
 */
/** 
 
/* eslint-disable no-unused-vars */
export const key = process.env.FIXER_KEY

const countries = ["MXN", "USD", "GBP", "EUR","RUB"]
//const countriesInd = ["MXN", "USD", "GBP", "EUR","RUB"]

const countriesInd = {"MXN" : "MXN", "USD" : "USD", "GBP": "GBP", "EUR": "EUR", "RUB": "RUB"}
export const getData = (plotConfig) => {
 
 if (Array.isArray(plotConfig)) {
  const countriesInd = ["MXN", "USD", "GBP", "EUR","RUB"]
   return plotConfig.reduce((sum, { countries, maxValue }, 
    countriesInd = {"MXN" : "MXN", "USD" : "USD", "GBP": "GBP", "EUR": "EUR", "RUB": "RUB"}
      )   => {
     const data = [`${Object.values(countriesInd)}`];
     for (let i = 0; i < countries; i++) {
       data.push((Math.random() * maxValue));

     }
     sum.push(data);
     return sum;
   }, []);
 }

 return [];
};
