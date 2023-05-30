import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getEthPrice, getGasPrice, getDailyPercentage, getMarketCap, getFinalizedAndSafeBlock } from "../alchemy";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [ethPrice, setEthPrice] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [dailyPercentage, setDailyPercentage] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [finalizedAndSafeBlock, setFinalizedAndSafeBlock] = useState({
    finalized: {},
    safe: {},
  });

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
  }, []);

  // Fetch the market cap
  useEffect(() => {
    const fetchMarketCap = async () => {
      const MARKETCAP =  await getMarketCap();
      setMarketCap(MARKETCAP);
    }
    fetchMarketCap();
  },[]);

  // Fetch Finalized and safe block
 useEffect(() => {
   const fetchFinalizedAndSafeBlock = async () => {
     const FINALIZEDANDSAFEBLOCK = await getFinalizedAndSafeBlock();
     setFinalizedAndSafeBlock(FINALIZEDANDSAFEBLOCK);
   };

   fetchFinalizedAndSafeBlock();
 }, []);

//  useEffect(() => {
//    console.log( 'Myobject ',finalizedAndSafeBlock);
//  }, [finalizedAndSafeBlock]);


  return (
    <GlobalContext.Provider
      value={{
        ethPrice,
        gasPrice,
        dailyPercentage,
        marketCap,
        finalizedAndSafeBlock
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
