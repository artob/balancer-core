#!/bin/bash
pwd=$(pwd)
echo "Attempting to remove old local accounts from $pwd/neardev/local"
rm -f $pwd/neardev/local/16*
echo "Attempting to remove old local accounts from ~/.near-credentials/local"
rm -f ~/.near-credentials/local/*.json
echo "Copying local validator key to neardev directory…"
cp ~/.near/local/validator_key.json $pwd/neardev/local/test.near.json
echo "Running pre-truffle-config.js to create test accounts…"
node pre-truffle-config.js
echo "Running truffle test…"
./node_modules/.bin/truffle test
