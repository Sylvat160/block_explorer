import { alchemy } from "../configs";

/**
 * Fetch an address information
 * @param {string} address - the address to retrieve
 * @return {Promise} - Balance 
 * */


export const getAddressInfo = async (address) => {
    
        try {
            
            const addressInfo = await alchemy.core.getBalance(address);
        
            console.log('addressInfo', addressInfo);
        
            return addressInfo;
        } catch (error) {
            console.log('error', error);
        }
}