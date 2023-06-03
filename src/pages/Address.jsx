import React, { useState, useEffect } from "react";
import { Utils } from "alchemy-sdk";
import { alchemy } from "../configs";
import { timeAgo, dateFormat, shortenAddress } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import { getAddressInfo, getAddressTransactions } from "../alchemy";
import { CopyToClipboard, Table } from "../components";
import { useGlobalContext } from "../context";


const AddressInfo = ({
  bigTitle,
  firstTitle,
  secondTitle,
  thirdTitle,
  firstValue,
  secondValue,
  thirdValue,
}) => {
  return (
    <div className="mx-1 my-4 w-full overflow-hidden rounded-xl border shadow-lg dark:border-tertiaryBgDark dark:bg-transactionBgDark dark:shadow-tertiaryBgLight/20 md:w-1/3">
      <section className="w-full p-5">
        <h4 className="text-base font-medium"> {bigTitle} </h4>
        <div className="my-4 flex flex-col">
          <p className="text-[13px] uppercase text-transactionGray">
            {firstTitle}
          </p>
          {/* <p className="text-[15px]">{firstTitle && Number(firstTitle).toFixed(18)} ETH</p> */}
          <p className="text-[15px]">{firstValue}</p>
        </div>
        <div className="my-4 flex flex-col">
          <p className="text-[13px] uppercase text-transactionGray">
            {secondTitle}
          </p>
          <p className="text-[15px]">
            {/* $ {(Number(balance) * ethPrice).toFixed(2)} */}
            {secondValue}
          </p>
          {/* {address} */}
        </div>
        <div className="flex flex-col">
          <p className="text-[13px] uppercase text-transactionGray">
            {thirdTitle}
          </p>
          <p className="text-[15px]"> {thirdValue} </p>
        </div>
      </section>
    </div>
  );
};

const Address = () => {
  const { ethPrice } = useGlobalContext();
  const [addressInfo, setAddressInfo] = useState(); // [addressInfo, setAddressInfo
  const [addressHistory, setAddressHistory] = useState(); // [addressHistory, setAddressHistory
  const params = useParams();
  

  useEffect(() => {
    const fetchAddressInfo = async () => {
      const address_info = await getAddressInfo(params.address);
      const address_history = await getAddressTransactions(params.address);
      setAddressInfo(address_info);
      setAddressHistory(address_history);
    };

    fetchAddressInfo();
  }, []);

  return (
    <div className="mx-5">
      <div className="my-4 text-lg font-medium">
        Address{" "}
        <span className="text-base font-normal text-transactionGray hover:text-[#2a71ff]">
          #{params.address}
          <CopyToClipboard text={params.address} />
        </span>
      </div>

      <div className="md:flex">
        <AddressInfo
          bigTitle="Overview"
          firstTitle="Eth Balance"
          secondTitle="Eth Value"
          thirdTitle="Token Holdings"
          firstValue={
            addressInfo && `${Number(Utils.formatEther(addressInfo._hex))} ETH`
          }
          secondValue={ethPrice && `$ ${ethPrice}`}
          thirdValue="..."
        />
        <AddressInfo
          bigTitle="More Info"
          firstTitle="PRIVATE NAME TAGS"
          secondTitle="LAST TXN SENT"
          thirdTitle="FIRST TXN SENT"
          firstValue="..."
          secondValue="..."
          thirdValue="..."
        />
        <AddressInfo
          bigTitle="Multi Chain"
          firstTitle="MULTICHAIN ADDRESSES"
          firstValue="..."
        />
      </div>

      <section className="mx-1 my-4 w-full overflow-hidden rounded-xl border shadow-lg dark:border-tertiaryBgDark dark:bg-transactionBgDark dark:shadow-tertiaryBgLight/20">
        <div className="flex w-full justify-between p-5">
          <p className="text-sm">
            Latest 25 from a total of {addressHistory?.transfers.length}{" "}
            transactions
          </p>
        </div>
        <Table history={addressHistory?.transfers} />
        
      </section>
    </div>
  );
};

export default Address;
