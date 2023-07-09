var common = {
    name: 'Firo',
    unit: 'FIRO'
  }
  
  var main = Object.assign({}, {
    hashGenesisBlock: '4381deb85b1b2c9843c222944b616d997516dcbd6a964e1eaf0def0830695233',
    port: 8168,
    protocol: {
      magic: 0xe3d9fef1
    },
    seedsDns: [
      'amsterdam.firo.org',
      'australia.firo.org',
      'chicago.firo.org'
    ],
    versions: {
      bip32: {
        private: 0x0488ade4,
        public: 0x0488b21e
      },
      bip44: 136,
      private: 0xd2,
      public: 0x52,
      scripthash: 0x07
    }
  }, common)
  /*var test = Object.assign({}, {
    hashGenesisBlock: 'bb0a78264637406b6360aad926284d544d7049f45189db5664f3c4d07350559e',
    port: 44556,
    protocol: {
      magic: 0xfcc1b7dc
    },
    seedsDns: [
      'testseed.jrn.me.uk'
    ],
    versions: {
      bip32: {
        private: 0x04358394,
        public: 0x043587cf
      },
      bip44: 1,
      private: 0xf1,
      public: 0x71,
      scripthash: 0xc4
    }
  }, common)
  */
  module.exports = {
    main,
    test
  }
