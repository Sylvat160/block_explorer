import React, {useState, useEffect} from 'react'
import { Utils } from 'alchemy-sdk'
import { timeAgo, dateFormat } from '../utils'
import { useNavigate, useParams } from 'react-router-dom'
import { getTransaction, getTransactionReceipt } from '../alchemy'

const TransactionInfo = ({ transaction, receipt }) => {
  const navigate = useNavigate();
  return (
    <div className="mx-5">
      <div className="my-4 text-lg font-medium">
        Transaction details{" "}
        <span className="text-base font-normal text-transactionGray">
          {/* # {block?.number} */}
        </span>
      </div>
      <div className="border-[0.5px] dark:border-tertiaryBgDark" />
      <div className="my-4 overflow-hidden rounded-xl border shadow-lg dark:border-tertiaryBgDark dark:bg-transactionBgDark dark:shadow-tertiaryBgLight/20">
        <section className="w-full p-5">
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray ">Transaction Hash:</h4>
            <p className="w-2/3 flex text-white">{transaction?.hash} </p>
          </div>
          <div className="block w-full py-1 text-sm sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Status:</h4>
            <div className="flex w-2/3">
              <div
                className={`rounded border p-1 px-1.5 text-xs
                    ${
                      receipt?.status === 0
                        ? "border-[#a1001b] bg-[#a1001b]/10 text-[#a1001b] "
                        : receipt?.status === 1
                        ? "border-[#00a186] bg-[#00a186]/10 text-[#00a186]"
                        : ""
                    }
                  `}
              >
                <div className="flex items-center justify-center">
                  {receipt?.status === 1 ? (
                    <div className="mr-0.5 rounded-full bg-[#00a186] px-1 text-[10px] text-stone-200 dark:text-black">
                      &#10003;
                    </div>
                  ) : (
                    <div className="mr-0.5 rounded-full bg-[#a1001b] px-1 text-[10px] text-stone-200 dark:text-black">
                      &#10007;
                    </div>
                  )}
                  {receipt?.status === 0
                    ? "Failed"
                    : receipt?.status === 1
                    ? "Success"
                    : ""}
                </div>
              </div>
              {/* {block?.timestamp ? timeAgo(block.timestamp) : null} ({" "}
                {block?.timestamp ? dateFormat(block.timestamp) : null} ) */}
            </div>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Block:</h4>
            <div className="flex w-2/3">{transaction?.blockNumber}</div>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Timestamp:</h4>
            <div className="flex w-2/3">
              {transaction?.timestamp ? timeAgo(transaction.timestamp) : null} ({" "}
              {transaction?.timestamp
                ? dateFormat(transaction.timestamp)
                : null}{" "}
              )
              {/* <Link to={`/address/${block?.transactions}`}>
                <p className="px-1 text-[#0A4D7C]">
                  {block?.transactions.length}{" "}
                </p>
              </Link> */}
            </div>
          </div>

          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Sponsored :</h4>
            {/* {block?.nonce} */}
          </div>
        </section>
        <div className="mx-5 border-[0.5px] dark:border-tertiaryBgDark" />
        <section className="w-full p-5">
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">From :</h4>
            <p className="w-2/3 text-[#2a71ff] cursor-pointer hover:text-[#3e537e]" onClick={() => navigate(`/address/${transaction?.from}`)}>
              {" "}
              {transaction?.from}{" "}
            </p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">To :</h4>
            <p
              className="w-2/3 text-[#2a71ff] cursor-pointer hover:text-[#3e537e]"
              onClick={() => navigate(`/address/${transaction?.to}`)}
            >
              {transaction?.to}
            </p>
          </div>
        </section>
        <div className="mx-5 border-[0.5px] dark:border-tertiaryBgDark" />
        <section className="w-full p-5">
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray"> Value:</h4>
            <p className="w-2/3">
              {transaction && Utils.formatEther(transaction.value)} Eth
            </p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Transaction Fee:</h4>
            <p className="w-2/3">
              {receipt
                ? Number(
                    Utils.formatUnits(receipt?.gasUsed._hex, "wei")
                  ).toLocaleString()
                : null}{" "}
              (wei)
            </p>
          </div>
          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Gas Price:</h4>
            <p className="w-2/3">
              {transaction
                ? Number(Utils.formatEther(transaction?.gasPrice._hex)).toFixed(
                    11
                  )
                : null}{" "}
              ETH {""}
              <span className="text-transactionGray">
                (
                {transaction
                  ? Number(
                      Utils.formatUnits(transaction?.gasPrice._hex, "gwei")
                    ).toFixed(2)
                  : null}{" "}
                Gwei)
              </span>
            </p>
          </div>

          <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray">Data:</h4>
            <p className="w-2/3"> {transaction?.data} </p>
          </div>
          {/* <div className="block w-full py-1 text-base sm:flex sm:px-0 ">
            <h4 className="w-1/3 text-transactionGray"> Block Hash :</h4>
            <p className="w-2/3"> {block?.hash} </p>
          </div> */}
        </section>
      </div>
    </div>
  );
};

const Transaction = () => {
  const params = useParams();
  const [transaction, setTransaction] = useState();
  const [receipt, setReceipt] = useState();

  useEffect(() => {
    const fetchTransaction = async () => {
      const tx = await getTransaction(params.transactionHash);
      const rcpt = await getTransactionReceipt(params.transactionHash);
      setTransaction(tx);
      setReceipt(rcpt);
    };
    fetchTransaction();
  }, []);

  return (
    <div> <TransactionInfo transaction={transaction} receipt={receipt} /> </div>
  )
}

export default Transaction