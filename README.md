# Getting Started
## **Dependencies**

- Linux , Mac or Windows
- node ≥ 14
- truffle v5.4.22


## Address



### kovan 

- ContractRegister : 0xbe38F333aE25dc9C8C62617B6c4Fb1c168be57b3

- DaoFactory :0x9B91197695fCFf8657dD4A63755EAECcA41B6997

- ChainLinkOracle : 0x80646827d72a44dcEA38e4E902002bF02cA31965

- DaoVaultFactory : 0x10F24611De2f3C76182cA0c24deACfF4b180E9f7

- DepartmentFactory : 0xCe82ad55A6C4aa0f36145306a1b1572024766951

- ERC20Factory : 0xB73900fA88A076E1fd081CdFe0B613F267024079

- ProposalFactory : 0x89071cC41B35c87F61a9b2d4540761F3d41ae7b3

- UnionDaoFactory : 0x0994a76a43Ff67a5915FF1D5d647a2d8a874AEdC



## **Installing**

```bash
git clone https://github.com/RainbowDAO/Chainlink-spring-22-hackathon.git
cd Chainlink-spring-22-hackathon
npm install
```

## **Prepare some ETH**
You may need 1 ~ 3 ETH in your wallet.


## **Compile  Contracts**
```truffle compile```
## **Deploy  Contracts**

To deploy the contracts,First write your private key in the .secret ,second open truffle-config.js . Then change the defaultNetwork accordingly. Then run ```truffle migrate --network mainnet```
,or deploy on your own network,run ```truffle migrate --network your network```






