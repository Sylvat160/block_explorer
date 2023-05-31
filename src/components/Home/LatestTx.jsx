import React, { useEffect, useState } from "react";
import { transaction } from "../../assets";
import { useGlobalContext } from "../../context";
import { styles, shortenAddress, mediumAddress } from "../../utils";
import { getLatestTransaction } from "../../alchemy";
import { Utils } from "alchemy-sdk";

const TransactionCard = ({blockNumber, from, to, value, hash, timestamp, style}) => {
  return (
    <div className={`flex justify-between items-center p-2 ${style}`}>
      <div className="bg-[#162138] m-1 w-10 h-10 flex justify-center items-center rounded">
        <img src={transaction} alt="block" />
      </div>
      <div className="flex flex-col">
        <h4 className=" text-sm text-[#2a71ff]"> {mediumAddress(hash)} </h4>
        <p className=" text-xs text-gray-400"> {timestamp} </p>
      </div>
      <div className="flex flex-col">
        <h4 className=" text-sm">
          From{" "}
          <span className={`text-[${styles.blue}]`}> { mediumAddress(from) } </span>
        </h4>
        <p className=" text-xs text-gray-400">
          to{" "}
          <span className={`text-[${styles.blue}]`}> {mediumAddress(to)} </span>
        </p>
      </div>

      <div
        className={`text-[12px] bg-[#0a1327] border-[0.1px] ${styles.border_color} drop-shadow-sm p-1 rounded-md`}
      >
        {  value } Eth
      </div>
    </div>
  );
};

const LatestTx = () => {
  const [latestTransactions, setLatestTransactions] = useState([]);

  useEffect(() => {
    const fetchLatestTransaction = async () => {
      try {
        const response = await getLatestTransaction();
        setLatestTransactions(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLatestTransaction();
  },[]);

  useEffect(() => {
    console.log(latestTransactions);
  }, [latestTransactions]);

  return (
    <div className="flex flex-col w-full">
      <div className={`p-2 border-b-[0.1px] ${styles.border_color} text-sm`}>
        Latest Transactions
      </div>
      {latestTransactions && (
        latestTransactions.map((transaction, i) => {
          const { blockNumber, from, to, value, hash, age } = transaction;
          const valueInEth = value ? Utils.formatEther(value) : "N/A";
          return (
            <TransactionCard
              key={i}
              blockNumber={blockNumber}
              from={from}
              to={to}
              value={parseFloat(valueInEth).toFixed(4)}
              hash={hash}
              timestamp={age}
              style={i < 5 && `border-b-[0.1px] ${styles.border_color}`}
            />
          );
        })
      )}
    </div>
  );
};

export default LatestTx;
