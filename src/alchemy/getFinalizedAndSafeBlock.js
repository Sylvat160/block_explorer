import { alchemy } from "../configs";

/**
 * Blocks ..
 * @return {Promise<object>} of the safe and finalized blocks
 */

export const getFinalizedAndSafeBlock = async () => {

    const finalizedBlock = await alchemy.core.getBlock('finalized');
    const safeBlock = await alchemy.core.getBlock('safe');

    // console.log('finalized : ', finalizedBlock);
    // console.log('safe' , safeBlock);

    return {
         finalized: {
      blockNumber: finalizedBlock.number,
      timestamp: finalizedBlock.timestamp,
      transactions: finalizedBlock.transactions,
    },
    safe: {
      blockNumber: safeBlock.number,
      timestamp: safeBlock.timestamp,
      transactions: safeBlock.transactions,
    },
    };


}