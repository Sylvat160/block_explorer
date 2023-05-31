import { alchemy } from "../configs";
import { timeAgo } from "../utils";

/**
 * Retrieve the latest transaction
 * @param {number} maxBlcks - the maximum number of blocks to retrieve
 * @return {Promise} - A block
 * */

export const getLatestBlock = async (maxBlcks = 6) => {

    const latestBlock = await alchemy.core.getBlockNumber();

    const blocksReturned = [];
    for (let i = 0; i < maxBlcks; i++) {
        const block = await alchemy.core.getBlock(latestBlock - i);
        blocksReturned.push(block);
    }

    const latestBlocks = await Promise.all(blocksReturned);

    console.log('latestBlocks', latestBlocks);

    return latestBlocks.map(({miner, number, timestamp, transactions, gasUsed}) => ({
        miner,
        number,
        timestamp,
        transactions,
        gasUsed,
        gasUsedInEth : gasUsed / 1000000000000000000,
        age : timeAgo(timestamp)
    }))
}