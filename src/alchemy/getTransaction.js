import { alchemy } from '../configs'


/**
 * Retrieve a transaction by hash 
 * @param {string} transactionHash - the hash of the transaction to retrieve
 * @throws {Error} - if the the transactions does't match expected format
 * @return {Promise<object>} - A transaction
 */

export const getTransaction = async (transactionHash) => {

    // regular expression to check if the transaction hash is valid
    const transactionHashRegex = new RegExp(/^(0x)?[0-9a-f]{64}$/i);
    console.log('hash', transactionHash);

    // check if the transaction hash is valid
    if (!transactionHashRegex.test(transactionHash)) {
        throw new Error('Invalid transaction hash');
    }

    // retrieve the transaction
    const transaction = await alchemy.core.getTransaction(transactionHash);

    console.log(transaction);
    return transaction;
}