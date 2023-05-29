import React from "react";
import { SearchBar } from "../components";
import { ethPurple, wavelight } from "../assets";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={` w-full md:h-40 h-40 bg-[url('/src/assets/waves-light.svg')] flex flex-wrap items-center justify-center`}
      >
        <div className="w-[50%]">
          <SearchBar placeholder="Search by Address / Txn Hash / Block / Token" />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
