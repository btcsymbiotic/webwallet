<?php

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = '193.203.162.185';
$rpcPort = $testnet ? 11333 : 11333;
$coinSymbol = 'btcs';
