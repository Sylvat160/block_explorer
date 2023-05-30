import { Utils } from "alchemy-sdk";
import { alchemy } from '../configs'

/**
 * Get gas price from Alchemy
 * @return {Promise<number>} gas price in gwei
 */

export const getGasPrice = async () => {
    const req = (await alchemy.core.getGasPrice())._hex;

    let amountInGwei = Math.round(Utils.formatUnits(req, 'gwei'))
    return amountInGwei;
}