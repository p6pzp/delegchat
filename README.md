# DelegChat
DelegChat is a privacy-preserving gated chat app created to improve communication between delegates & delegators. This app enables confidential communication through end-to-end encryption. Chat access control is token-gated through Sismo with an NFT depending on the delegate.
1. Clone those 2 repos:

clone git@github.com:p6pzp/delegnouns.git

clone git@github.com:p6pzp/delegchat.git

2. Open a delegnouns terminal and type:

yarn local

3. Open new delegnouns terminal and type: 

yarn local -deploy

4. Open a delegchat terminal and type:

yarn start

5. fund your wallet (replace YOURWALLETADDRESS with your wallet address):

yarn hardhat --network localhost dev-send-eth --eth 1 --address YOURWALLETADDRESS
