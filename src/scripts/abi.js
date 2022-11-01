// Lido address 0x47EbaB13B806773ec2A2d16873e2dF770D130b50
// Ether scan api key EZC8UQRZM768J44SE7G88XC6YE95SARBQZ

const fetch = require('node-fetch'); 
async function main() {
    const contractAddress = "0x47EbaB13B806773ec2A2d16873e2dF770D130b50";
    console.log('api: ', process.env.ETHERSCAN_API_KEY); 
    const apiKey =  process.env.ETHERSCAN_API_KEY
    const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`);
    const data = await response.json();

    // print the JSON response 
    let abi = data.result;
    console.log(abi);
}
main(); 