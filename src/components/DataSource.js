import React, { useState, useEffect } from 'react';
import { getData } from "../constants/constants";

const DataSource = ({ setData, plotConfig }) => {
   
  useEffect(() => {
    const interval = setInterval(() => {
      setData(getData(plotConfig));
    }, 1000000);
    return () => clearInterval(interval);
  }, [plotConfig, setData]);

  return null;

}

export default DataSource;