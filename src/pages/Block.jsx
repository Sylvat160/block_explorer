import React, { useState, useEffect } from "react";
import { Utils } from "alchemy-sdk";
import { alchemy } from "../configs";
import { timeAgo, dateFormat, shortenAddress, styles } from "../utils";
import { arrow } from "../assets";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getBlockInfo } from "../alchemy";

const BlockInfo = ({ block }) => {
  const navigate = useNavigate();
  return (
    <div className="mx-5">
      <div className="my-4 text-lg font-medium">
        Block{" "}
        <span className="text-base font-normal text-transactionGray">
          # {block?.number}
        </span>
      </div>
      <div className="border-[0.5px] dark:border-tertiaryBgDark" />
      <div className="my-4 overflow-hidden rounded-xl border shadow-lg dark:border-tertiaryBgDark dark:bg-transactionBgDark dark:shadow-tertiaryBgLight/20">
        <section className="w-full p-5">
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray ">Block Height:</h4>
            <p className="w-2/3 flex">
              {block?.number}{" "}
              <span className=" flex">
                {" "}
                <img
                  src={arrow}
                  alt="previous"
                  className=" rotate-180 w-4 mx-1 cursor-pointer"
                  onClick={() => navigate(`/block/${block?.number - 1}`)}
                />{" "}
                <img
                  src={arrow}
                  alt="next"
                  className="w-4 cursor-pointer"
                  onClick={() => navigate(`/block/${block?.number + 1}`)}
                />{" "}
              </span>{" "}
            </p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Status:</h4>
            <div className="flex w-2/3">
              
              WIP
            </div>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Timestamp:</h4>
            <div className="flex w-2/3">
              <div className="my-auto mr-1">{/* <MdAccessTime /> */}</div>
              {block?.timestamp ? timeAgo(block.timestamp) : null} ({" "}
              {block?.timestamp ? dateFormat(block.timestamp) : null} )
            </div>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Proposed On:</h4>
            <div className="flex w-2/3">
              Block proposed on slot{" "}
              <Link to={`/address/${block?.transactions}`}>
                <p className="px-1 text-[#0A4D7C]">
                  {block?.transactions.length}{" "}
                </p>
              </Link>
              , epoch {block?.epoch}
            </div>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Transactions:</h4>
            <Link to={`/address/${block?.transactions}`}>
              <p className="flex w-2/3">
                {block?.transactions.length}{" "}
                <span className="ml-1">transactions</span>
              </p>
            </Link>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Nonce :</h4>
            {block?.nonce}
          </div>
        </section>
        <div className="mx-5 border-[0.5px] dark:border-tertiaryBgDark" />
        <section className="w-full p-5">
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Fee Recipient:</h4>
            <Link to={`/address/${block?.miner}`}>
              {/* TODO: change long address of miner to ens names */}
              <p className="w-2/3">{block?.miner}</p>
            </Link>
            {/* <CopyToClipboard text={block?.miner} /> */}
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Block Reward</h4>
            <p className="w-2/3">WIP</p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Total Difficulty:</h4>
            <p className="w-2/3">{block?.difficulty}</p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Size:</h4>
            <p className="w-2/3">
              {/* {block?.nonce} bytes */}
              WIP
            </p>
          </div>
        </section>
        <div className="mx-5 border-[0.5px] dark:border-tertiaryBgDark" />
        <section className="w-full p-5">
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Gas Used:</h4>
            <p className="w-2/3">
              {block
                ? Number(
                    Utils.formatUnits(block?.gasUsed._hex, "wei")
                  ).toLocaleString()
                : null}{" "}
              (
              {block
                ? Number(
                    (Utils.formatUnits(block?.gasUsed._hex, "wei") /
                      Utils.formatUnits(block?.gasLimit._hex, "wei")) *
                      100
                  ).toFixed(2)
                : null}
              %)
            </p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Gas Limit:</h4>
            <p className="w-2/3">
              {block
                ? Number(
                    Utils.formatUnits(block?.gasLimit._hex, "wei")
                  ).toLocaleString()
                : null}
            </p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Base Fee Per Gas:</h4>
            <p className="w-2/3">
              {block
                ? Number(Utils.formatEther(block?.baseFeePerGas._hex)).toFixed(
                    11
                  )
                : null}{" "}
              ETH {""}
              <span className="text-transactionGray">
                (
                {block
                  ? Number(
                      Utils.formatUnits(block?.baseFeePerGas._hex, "gwei")
                    ).toFixed(2)
                  : null}{" "}
                Gwei)
              </span>
            </p>
          </div>

          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Parent Hash:</h4>
            <p className="w-2/3"> {block?.parentHash} </p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray"> Block Hash :</h4>
            <p className="w-2/3"> {block?.hash} </p>
          </div>
        </section>
        {/* <details>
          <summary>Transactions [{block?.transactions.length}]: </summary>
          <ul>
            {block?.transactions.map((item, index) => (
              <li key={item}>
                <div>[{index}] </div>
                <Link className="list-links break-word" to={`/tx/${item}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </details> */}
      </div>
    </div>
  );
};

const Block = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [block, setBlock] = useState();

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const BLOCK = await getBlockInfo(parseInt(params.blockNumber));
        if (!BLOCK) throw new Error("Block not found");
        setBlock(BLOCK);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlock();
  }, [params.blockNumber]);

  return <div>  <BlockInfo block={block} /> </div>;
};

export default Block;
