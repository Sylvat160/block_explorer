import axios from "axios";

/**
 * Get the market cap value from CoinGecko API
 * @return {Promise<number>} : total value of the eth market cap
 */

export const getMarketCap    = async () => {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/ethereum");

    // console.log(response);
    return response.data.market_data.market_cap.usd
}