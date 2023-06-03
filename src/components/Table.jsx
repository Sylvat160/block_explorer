import React, {useState} from "react";
import { Link } from "react-router-dom";
import { shortenAddress, mediumAddress, styles } from "../utils";
import ReactPaginate from "react-paginate";

const Table = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const txPerPage = 25;
  const pagesVisited = pageNumber * txPerPage;
  const pageCount = Math.ceil(history?.length / txPerPage);

  const changePage = ({ selected }) => {
    const newPage = (selected * txPerPage) % history?.length;
    console.log('Page number: ', newPage);
    setPageNumber(newPage);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel="<- "
        nextLabel=" ->"
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        nextClassName=" mx-2 px-2 py-1 border border-slate-400 rounded-md text-[#2a71ff] hover:bg-slate-800 hover:text-white"
        previousClassName="mx-2 px-2 py-1 border border-slate-400 rounded-md text-[#2a71ff] hover:bg-slate-800 hover:text-white"
        containerClassName="flex justify-center items-center my-5"
      />
      <table className="w-full">
        <thead>
          <tr className="text-tertiaryText text-left text-[13px] font-semibold tracking-wide bg-slate-800 border-b border-slate-400">
            <td className="p-2 pl-5" key="txHash">
              Transaction Hash
            </td>
            <td className="p-2" key="method">
              Method
            </td>
            <td className="p-2" key="blockNum">
              Block
            </td>
            {/* <td className="p-2" key="category">
            Category
          </td> */}
            <td className="p-2" key="sender">
              From
            </td>
            <td className="p-2" key="payee">
              To
            </td>
            <td className="p-2" key="val">
              Value
            </td>
            {/* <td className="p-2" key="txnFee">
            Txn Fee
          </td> */}
          </tr>
        </thead>
        <tbody className="bg-slate-800">
          {history
            ?.slice(pagesVisited, pagesVisited + txPerPage)
            .map((item, index) => {
              return (
                <tr
                  className="border-b-[0.1px] border-slate-400"
                  key={`${item.uniqueId}-1-${index}`}
                >
                  <td
                    className="py-2 pl-5 text-left"
                    key={`${item.uniqueId}-2-${index}`}
                    title={history.hash}
                  >
                    <Link className="text-[#2a71ff]" to={`/tx/${item.hash}`}>
                      {mediumAddress(item.hash)}
                    </Link>
                  </td>
                  <td
                    key={`${item.uniqueId}-3-${index}`}
                    className={`text-[10px]`}
                  >
                    <span
                      className={`border-[0.1px] ${styles.border_color} p-1 rounded-md text-white bg-[#273343]`}
                    >
                      Transfer
                    </span>
                  </td>
                  <td key={`${item.uniqueId}-4-${index}`}>
                    {" "}
                    <Link
                      className="text-[#2a71ff]"
                      to={`/block/${item.blockNum}`}
                    >
                      {parseInt(item.blockNum, 16)}
                    </Link>
                  </td>
                  {/* <td key={`${item.uniqueId}-5-${index}`} className="text-[10px]">
                {" "}
                <span
                  className={`border-[0.1px] ${styles.border_color} p-1 rounded-md text-white bg-[#273343]`}
                >
                  { item.category }
                </span>{" "}
              </td> */}
                  <td key={`${item.uniqueId}-6-${index}`}>
                    {" "}
                    <Link
                      className="text-[#2a71ff]"
                      to={`/address/${item.from}`}
                    >
                      {shortenAddress(item.from)}{" "}
                    </Link>
                  </td>
                  <td key={`${item.uniqueId}-7-${index}`}>
                    {" "}
                    <Link className="text-[#2a71ff]" to={`/address/${item.to}`}>
                      {shortenAddress(item.to)}{" "}
                    </Link>
                  </td>
                  <td key={`${item.uniqueId}-8-${index}`}>
                    {" "}
                    {Number(item.value.toFixed(5))} Eth{" "}
                  </td>
                  {/* <td key={`${item.uniqueId}-9-${index}`}>... </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel="<- "
        nextLabel=" ->"
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        nextClassName=" mx-2 px-2 py-1 border border-slate-400 rounded-md text-[#2a71ff] hover:bg-slate-800 hover:text-white"
        previousClassName="mx-2 px-2 py-1 border border-slate-400 rounded-md text-[#2a71ff] hover:bg-slate-800 hover:text-white"
        containerClassName="flex justify-center items-center my-5"
      />
    </div>
  );
};

export default Table;
