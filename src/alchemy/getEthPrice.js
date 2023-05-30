import axios from 'axios'
/**
 * Fetches the current USD price of Ethereum from CoinGecko
 * @return {Promise<number>} the current price of ETH
 */

export const getEthPrice = async (setEthPrice) => {
  try {
    const req = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
    )

    if (req.status !== 200) {
      throw new Error('Error Fetching Eth Price From Coingecko')
    }

    
    setEthPrice(req.data.ethereum.usd);
  } catch (error) {
    console.log(error);
  }
}
