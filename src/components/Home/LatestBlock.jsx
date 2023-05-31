import React, { useState } from "react";
import { block } from "../../assets";
import { useGlobalContext } from "../../context";
import { styles } from "../../utils";

const BlockCard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className={`p-2 border-b-[0.1px] ${styles.border_color} text-sm`}>
        Latest Blocks
      </div>
      <div className="flex justify-between items-center p-2">
        <div className="bg-[#162138] m-1 w-10 h-10 flex justify-center items-center rounded">
          <img src={block} alt="block" />
        </div>
        <div className="flex flex-col relative md:right-10 right-2">
          <h4 className=" text-sm text-[#2a71ff]"> 6465656 </h4>
          <p className=" text-xs text-gray-400"> 6s ago </p>
        </div>
        <div className="flex flex-col">
          <h4 className=" text-sm">
            Fee Recipient{" "}
            <span className={`text-[${styles.blue}]`}>beaverbuild</span>
          </h4>
          <p className=" text-xs text-gray-400">
            <span className={`text-[${styles.blue}]`}> 189 txns </span> in 6s
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
};

const LatestBlock = () => {
  return <BlockCard />;
};

export default LatestBlock;
