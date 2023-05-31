import React, { useState } from "react";
import { transaction } from "../../assets";
import { useGlobalContext } from "../../context";
import { styles } from "../../utils";

const TransactionCard = () => {
  return (
<div className="flex flex-col w-full">
      <div className={`p-2 border-b-[0.1px] ${styles.border_color} text-sm`}>
        Latest Transactions
      </div>
      <div className="flex justify-between items-center p-2">
        <div className="bg-[#162138] m-1 w-10 h-10 flex justify-center items-center rounded">
          <img src={transaction} alt="block" />
        </div>
        <div className="flex flex-col">
          <h4 className=" text-sm text-[#2a71ff]"> 0xe5ed9e89dcbaad... </h4>
          <p className=" text-xs text-gray-400"> 6s ago </p>
        </div>
        <div className="flex flex-col">
          <h4 className=" text-sm">
            From{" "}
            <span className={`text-[${styles.blue}]`}>0x952222...CC4BAfe5</span>
          </h4>
          <p className=" text-xs text-gray-400">
            to{" "}
            <span className={`text-[${styles.blue}]`}>0x4675C7...f3b0a263</span>
          </p>
        </div>

        <div
          className={`text-[12px] bg-[#0a1327] border-[0.1px] ${styles.border_color} drop-shadow-sm p-1 rounded-md`}
        >
          0.15747 Eth
        </div>
      </div>
    </div>
  );
}

const LatestTx = () => {
  return (
    <TransactionCard />
  );
};

export default LatestTx;
