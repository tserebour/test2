/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const { ethers, BigNumber } = require("ethers");
const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/cIP70Q4bVNMcB-XDUp2k7griYEbmW7li');






// Constants
const PORT = 3000;
const HOST = '0.0.0.0';



// App
const app = express();
app.get('/', (req, res) => {
	provider.getBalance('0x003150255744a88946bE2190cc3214C1aeA9aA89').then((result) => {
		console.log(result);

		res.send("Current balance : " + result);
		
	});
	
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);