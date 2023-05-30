import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getEthPrice, getGasPrice, getDailyPercentage } from "../alchemy";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [ethPrice, setEthPrice] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [dailyPercentage, setDailyPercentage] = useState(0);

  //* Get the eth price
  useEffect(() => {
    const fetchEthPrice = async () => {
      await getEthPrice(setEthPrice);
    };

    fetchEthPrice();
  }, []);
  // Gas price
  useEffect(() => {
    const fetchGasPrice = async () => {
      const price = await getGasPrice();
      setGasPrice(price);
    };
    fetchGasPrice();
  }, []);
  // The Daily percentage
  useEffect(() => {
    const fetchDailyPercentage = async () => {
      const dailyPercentage = await getDailyPercentage();
      setDailyPercentage(dailyPercentage)
      
    }
    fetchDailyPercentage();
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        ethPrice,
        gasPrice,
        dailyPercentage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
