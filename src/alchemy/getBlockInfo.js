import { alchemy } from "../configs";

/**
 * Get block information
 * @param {string|number} query - the hash | number of the block to retrieve
 * @return {Promise} - A block
 * */


export const getBlockInfo = async (query) => {

    let hashOrNumber = query;

    if (!/0x/.test(query)) {
        hashOrNumber = Number(query);
    }

    const blockInfo = await alchemy.core.getBlock(hashOrNumber);

    console.log('block', block);

    return { ...blockInfo};
}