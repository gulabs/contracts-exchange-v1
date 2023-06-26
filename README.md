# @gu-nft-marketplace/contracts

## Description

This project contains all smart contracts used for the G.U.NFT marketplace. This includes:

- core exchange contract
- libraries
- currency manager contract
- execution manager and strategy contracts
- royalty-related contracts
- transfer managers and selector contracts

It also contains a peripheral contract (`OrderValidatorV1`) that is used to verify the validity of (maker) orders.

## Installation

```shell
# Yarn
yarn add  @gu-nft-marketplace/contracts

# NPM
npm install @gu-nft-marketplace/contracts
```

## Deployments

### Initialize

- sub-modules

```shell
git submodule update --init --recursive
```

- dependencies

```shell
yarn
```

### Test

```shell
yarn test
```

### Deploy

- Modify `.env` in `scripts/deploy`
- Deploy

```shell
yarn deploy # hardhat node
yarn deploy --network gusandbox # gusandbox
```

### Verify contracts

```shell
npx hardhat verify --network gusandbox <address> <params>
```
