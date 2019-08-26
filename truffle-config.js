const MNEMONIC = 'gallery panther govern inside churn diagram reason program alley time unfair soft';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/e02f84f0f2134df794543276de5350be")
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/e02f84f0f2134df794543276de5350be")
      },
      network_id: 3,
      from: "0xbC4F780cc94EFf26fBBaC35C224dd98f8069158f",
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
