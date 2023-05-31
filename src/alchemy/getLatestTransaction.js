import { alchemy } from "../configs";
import { timeAgo } from "../utils";

/**
 * Retrieve the latest transaction
 * @param {number} maxTxns - the maximum number of transactions to retrieve
 * @return {Promise} - A transaction
 */

export const getLatestTransaction = async (maxTxns = 6) => {

    const latestBlock = await alchemy.core.getBlockNumber();

    const { transactions, timestamp } = await alchemy.core.getBlock(latestBlock);

    const transactionsReturned = [];

    for (let i = 0; i < maxTxns; i++) {
        const transaction = await alchemy.core.getTransaction(transactions[i]);
        transactionsReturned.push(transaction);
    }

    const latestTransaction = await Promise.all(transactionsReturned);

    console.log('latestTransaction', latestTransaction);

    return latestTransaction.map(({blockNumber, from, to, hash, value}) => ({
        blockNumber,
        from,
        to,
        hash,
        age : timeAgo(timestamp),
        value
    }))
}