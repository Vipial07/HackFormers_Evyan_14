import { ethers } from "ethers";
import { ABI } from './ABI.js';
import { contractStore } from '../store/contractStore.js';

export const backend = {
   
    async voterSigner(voter_address) {
        let contractAddress = "0x4A258BCD25355A1261205C35511A94d8BBfc63D3";
        let signer3 = new ethers.providers.JsonRpcProvider("http://localhost:8545").getSigner(voter_address)
        let contract_signer = new ethers.Contract(
            contractAddress,
            ABI,
            signer3
        );
        if (!contractStore().contract_signer) {
            contractStore().addContractSigner({
                contract_signer: contract_signer,
            })
        }
    },
    async loader() {
        try {
            let contractAddress = "0x4A258BCD25355A1261205C35511A94d8BBfc63D3";
            let url = "http://localhost:8545";
            let provider = new ethers.providers.JsonRpcProvider(url);
            console.log('signer')
            let signer = provider.getSigner()
            let contract = new ethers.Contract(
                contractAddress,
                ABI,
                signer
            );
            const contract1 = new ethers.Contract(
                contractAddress,
                ABI,
                provider
            );
            if (!contractStore().contract) {
                contractStore().addContract({
                    contract: contract,
                    contract1: contract1
                })
            }
            console.log(`Sucessfully created Contract `)
        } catch (e) {
            console.log(`Error has been occured in Loader function`)
            console.log(e)
        }
    },


}