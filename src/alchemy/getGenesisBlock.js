import { alchemy } from "../configs";

/**
 * Retrieve the genesis block
 * @return {Promise} - A block
 * */

export const getGenesisBlock = async () => {

    try {
        
        const genesisBlock = await alchemy.core.getBlock(0);
    
        // const transactionsCount = genesisBlock.transactions.length;
    
    
        console.log('genesisBlock', genesisBlock);
    
        return genesisBlock;
    } catch (error) {
        console.log('error', error);
    }

}