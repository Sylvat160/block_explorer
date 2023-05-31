import React from "react";
import { useGlobalContext } from "../context/index.jsx";
import { SearchBar, Overview, LatestBlock, LatestTx } from "../components";
import { ethPurple, wavelight } from "../assets";

const Home = () => {
  const {
    ethPrice,
    gasPrice,
    dailyPercentage,
    marketCap,
    finalizedAndSafeBlock,
  } = useGlobalContext();
  const { finalized, safe } = finalizedAndSafeBlock;

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={` w-full md:h-40 h-40 bg-[url('/src/assets/waves-light.svg')] flex flex-wrap items-center justify-center`}
      >
        <div className="w-[50%]">
          <SearchBar placeholder="Search by Address / Txn Hash / Block / Token" />
        </div>
      </div>
      <Overview
        ethPrice={ethPrice}
        gasPrice={gasPrice}
        dailyPercentage={dailyPercentage}
        marketCap={marketCap}
        lastFinalisedBlock={finalized.blockNumber}
        lastSafeBlock={safe.blockNumber}
      />

      <div className="flex flex-wrap  justify-center items-center w-full pt-5">
        
        <div className="md:w-[48%] w-full flex flex-col bg-[#111A2E] items-start drop-shadow-xl m-2 border-[0.1px] dark:border-gray-500 rounded-md">
          <LatestBlock />
        </div>
        <div className="md:w-[48%] w-full flex flex-col bg-[#111A2E] items-center drop-shadow-xl m-2 border-[0.1px] dark:border-gray-500 rounded">
          <LatestTx />
        </div>
      </div>
    </div>
  );
};

export default Home;
