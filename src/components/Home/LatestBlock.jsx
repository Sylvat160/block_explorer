import React, { useEffect, useState } from "react";
import { block } from "../../assets";
import { useGlobalContext } from "../../context";
import { styles, timeAgo, shortenAddress } from "../../utils";
import { getLatestBlock } from "../../alchemy";
import { Utils } from "alchemy-sdk";


const BlockCard = ({miner, number, timestamp, transactions, gasUsed, style}) => {
  return (
    <div className={`flex justify-between items-center p-2 ${style}`}>
      <div className="bg-[#162138] m-1 w-10 h-10 flex justify-center items-center rounded">
        <img src={block} alt="block" />
      </div>
      <div className="flex flex-col relative md:right-10 right-2">
        <h4 className=" text-sm text-[#2a71ff]"> {number} </h4>
        <p className=" text-xs text-gray-400"> {timeAgo(timestamp)} ago </p>
      </div>
      <div className="flex flex-col">
        <h4 className=" text-sm">
          Fee Recipient{" "}
          <span className={`text-[${styles.blue}]`}>
            {" "}
            {shortenAddress(miner)}{" "}
          </span>
        </h4>
        <p className=" text-xs text-gray-400">
          <span className={`text-[${styles.blue}]`}> {transactions} txns </span>{" "}
          in 6s
        </p>
      </div>

      <div
        className={`text-[12px] bg-[#0a1327] border-[0.1px] ${styles.border_color} drop-shadow-sm p-1 rounded-md`}
      >
        {gasUsed} Eth
      </div>
    </div>
  );
};



const LatestBlock = () => {
  const [latestBlocks, setLatestBlocks] = useState([]);

  useEffect(() => {
    const fetchLatestBlock = async () => {
      try {
        const response = await getLatestBlock();
        setLatestBlocks(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLatestBlock();
  }, []);



  return (
    <div className="flex flex-col w-full">
      <div className={`p-2 border-b-[0.1px] ${styles.border_color} text-sm`}>
        Latest Blocks
      </div>
      {latestBlocks && (
        latestBlocks.map((block, i) => {
          const { miner, number, timestamp, transactions, gasUsed } = block;
          const gasUsedInWei = Utils.formatUnits(gasUsed, "gwei");
          return (
            <BlockCard
              key={number}
              miner={miner}
              number={number}
              timestamp={timestamp}
              transactions={transactions.length}
              gasUsed={parseFloat(gasUsedInWei).toFixed(4)}
              style={i < 5 && `border-b-[0.1px] ${styles.border_color}`}
            />
          );
        })
      )}
    </div>
  );
};

export default LatestBlock;




   