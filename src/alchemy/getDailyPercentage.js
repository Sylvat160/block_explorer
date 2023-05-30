import axios from "axios";

/**
 * Fetch the daily percentage from CoinGecko Api
 * @return {Promise<number>} : percentage
 */


export const getDailyPercentage = async () => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/ethereum");
    const data = response.data;
    return data.market_data.market_cap_change_percentage_24h
  } catch (error) {
    console.error(error);
  }
};
