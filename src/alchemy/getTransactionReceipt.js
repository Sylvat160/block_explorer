import { alchemy } from '../configs'


/**
 * Retrieve a transaction receipt by hash
 * @param {string} transactionHash - the hash of the transaction to retrieve
 * @throws {Error} - if the the transactions does't match expected format
 * @return {Promise<object>} - A transaction receipt
*/

export const getTransactionReceipt = async (transactionHash) => {

    // regular expression to check if the transaction hash is valid
    const transactionHashRegex = new RegExp(/^(0x)?[0-9a-f]{64}$/i);

    // check if the transaction hash is valid
    if (!transactionHashRegex.test(transactionHash)) {
        throw new Error('Invalid transaction hash');
    }

    // retrieve the transaction receipt
    const transactionReceipt = await alchemy.core.getTransactionReceipt(transactionHash);

    console.log('transactionReceipt', transactionReceipt);
    return transactionReceipt;
}