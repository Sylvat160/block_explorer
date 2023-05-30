import React, { useState, useEffect } from "react";
import { blackether, globe, time, tx } from "../../assets";

const Card = ({ icon, title, value, percentage, style }) => {
  return (
    <div className={`flex flex-col ${style && style}`}>
      <div className="flex">
        <img src={icon} alt="" className="p-2 " />
        <div className="flex flex-col text-gray-200">
          <h4> {title} </h4>
          <h3 className="flex text-gray-400">
            {" "}
            {value}{" "}
            {percentage && (
              <p
                className={`${
                  percentage > 0 ? "text-green-400" : "text-red-500"
                } pl-1`}
              >
                ({parseFloat(percentage.toFixed(2))}%)
              </p>
            )}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Overview = ({
  ethPrice,
  dailyPercentage,
  marketCap,
  gasPrice,
  lastFinalisedBlock,
  lastSafeBlock,
}) => {
  return (
    <div className="md:flex lg:flex  justify-around items-center bg-[#111A2E] rounded-lg relative bottom-3 drop-shadow-md p-5">
      <div className="flex w-96 flex-col p-2 md:border-r border-gray-500">
        <Card
          icon={blackether}
          title="ETHER PRICE"
          value={`$ ${ethPrice}`}
          percentage={dailyPercentage}
          style="p-1 border-b "
        />
        <Card
          icon={globe}
          title="MARKET CAP"
          value={`$ ${marketCap.toLocaleString()}`}
          style="p-1"
        />
      </div>
      <div className="flex  flex-col p-2 ">
        <div className="flex">
          <Card
            icon={tx}
            title="TRANSACTIONS"
            value="..."
            percentage=""
            style="p-1 "
          />
          <Card
            title="MED GAS PRICE"
            value={`${gasPrice} GWEI`}
            style="p-1 pl-44"
          />
        </div>
        <div className="flex">
          <Card
            icon={time}
            title="LAST FINALIZED BLOCK"
            value={lastFinalisedBlock}
            style="p-1 border-t"
          />
          <Card
            title="LAST SAFE BLOCK"
            value={lastSafeBlock}
            style="p-1 pl-24 border-t"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
