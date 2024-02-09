let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.cryptosybiotic.com/api/',
	mainnetExplorerUrl: "https://exsymbiotic.com/#/",
	mainnetExplorerUrlHash: "https://exsymbiotic.com/#/mempool{ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://exsymbiotic.com/#/block",
	testnetExplorerUrl: "http://testnet.exsymbiotic.com/",
	testnetExplorerUrlHash: "http://testnet.exsymbiotic.com/",
	testnetExplorerUrlBlock: "http://testnet.exsymbiotic.com/",
	testnet: false,
    coinUnitPlaces: 12,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,         
	txCoinbaseMinConfirms: 10,
	addressPrefix: 0x3c8bd0,
	integratedAddressPrefix: 0,
	addressPrefixTestnet: 0,
	integratedAddressPrefixTestnet: 0,
	subAddressPrefix: 0,
	subAddressPrefixTestnet: 0,
	coinFee: new JSBigInt('100000000000'),
	feePerKB: new JSBigInt('100000000000'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('100000000'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'BTCS',
	openAliasPrefix: "btcs",
	coinName: 'Bitcoin Symbiotic',
	coinUriPrefix: 'Bitcoin Symbiotic:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
};
