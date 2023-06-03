import { alchemy } from '../configs'

/**
 * Fetch an address information
 * @param {string} address - the address to retrieve
 * @return {Promise} - Balance
 * */

export const getAddressInfo = async (address) => {
  try {
    const addressInfo = await alchemy.core.getBalance(address)

    console.log('addressInfo', addressInfo)

    return addressInfo
  } catch (error) {
    console.log('error', error)
  }
}

export const getAddressTransactions = async (address) => {
  try {
    const addressTransactions = await alchemy.core.getAssetTransfers({
      fromBlock: '0x0',
      toBlock: 'latest',
      fromAddress: address,
      excludeZeroValue: true,
      category: ['internal', 'external', 'erc20', 'erc721', 'erc1155'],
    });

    console.log('addressTransactions', addressTransactions)
    return addressTransactions
  } catch (error) {
    console.log('error', error)
  }
}
