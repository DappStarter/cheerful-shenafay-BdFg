require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind home grace indoor flower sentence'; 
let testAccounts = [
"0xa0869ab2c9a9b86a8b85a784914d46fcfdefb7d80f4578fb306d657e3964fa0a",
"0x54c845e84dea62bcc94384f4b356b1db13a3f9a02d3189e4b758792e8c22fada",
"0xae9879d838db0e53abeae12a01380fdc4c11f68e3e56110f1698d099468e40a1",
"0xa72e46c2b0dfbe7885be5575245cb44e22fb8c7682bbf8e3ca9ddfaef812d59b",
"0x2a2e900eb0ded0b994dccf2d1050474a00638a00c79455c07300adb75c941c82",
"0x734dba4a660b1df6376a779216b8478062f59fed8cb59b8088554c7180d77bc2",
"0x0336fdcc4ed3d3f387cbd19bc79e7dc1e2dbf6f47ac6303b418deff6917b1a52",
"0x8bffbefb1d5719d84ca996eb1b48b674ebb79a296bf1ee33fc7dfcbaae8d9a76",
"0xe24552fb5c0a44a0dd9e14bcadcc1d3eb7c604c9354fd597ec1a67fdcb22e417",
"0x51e05bded9809c39b4ca43ceda22c63a871cf8a87a7c21fbb4aff14c167edb25"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


