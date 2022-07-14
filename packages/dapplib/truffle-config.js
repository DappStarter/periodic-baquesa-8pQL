require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain equip imitate private fresh segment'; 
let testAccounts = [
"0x5fccfe277ddd1fa753ea648f9ee3f9c88e2e0155bdeb7c207dc116d59404133b",
"0x8c9d805c5a7d1acba69f3f430ea4caee0beda56eded41babc5ffca869fb92971",
"0x6d58ed1fd7939721db5b3dd9e5f38896b302ecf583b4a9180e3338870f875592",
"0x131f8d2131b3b714e435dfaa43b15aa71c9e9b2f944ee6a53783b10cbdc27b84",
"0xd83964c793f9f31780210795dba53a68f9891b05369895b51e3c2a85b7b619a4",
"0xb87c448329d299dcb3dc5b5612a15f2b318e18761d5b6c0581e13abb2e3c4859",
"0x8883a7653ab17e2993106718e420648fd070488f96861f33b56f443795139b2b",
"0x5116dfd6a4b4adc8c07ec73b87ca660ae49cd7aa23d6bc78facb857a3c619939",
"0xd87e58e02908c323e760957009c93d906f0dd2ab0cbe89f0153218a53136201c",
"0x33ff1ff9be2b195f0fe4c2dc8ff6837238c3cfa06e8897e5a24544fcd785ac43"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

