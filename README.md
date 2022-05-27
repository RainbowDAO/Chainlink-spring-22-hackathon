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

### mumbai
- ContractRegister : 0x30fB8b950c18D64a438a57f91F619863264de658
- DAOFactory : 0x85b5a0E52EA39ba416712EbD0234f36B7F1851F6
- ProposalFactory : 0x7f42ACC216155EA0444bEb0eB07A9dA270F83663
- DaoVaultFactory : 0x829C1A191f33C02a92711665c4348c7d933E757A
- DepartmentFactory : 0x4e44ed617958E8eCE4908Db1c18dAEaC18FD8c53
- ERC20Factory : 0x37982944efD09f878afFC3Ee8FFb02b20E86fDe7
- ChainLinkOracle : 0x37953e725cCc5650E7D822191FC23F3C4D702FB2
- UnionDaoFactory : 0x5C557415a801FDC0C3Aa6A45f67B0e46825d08A1

###  BNB TEST
- ContractRegister : 0x7e58d2D0E92ced62aAd31eDc25d617C61f323317
- DaoFactory : 0x69aae8eE28B9127C621517545092Faa81dC70886
- DaoVaultFactory :  0x503Ec19098367FA10988dF495c24FF0d22aBBC58
- DepartmentFactory : 0x04B702c7a8f4988c98CaF0BC7bd0A07b2fe33d6e
- ERC20Factory : 0x1BEfB58AA64e6D9472aA8aEaE6C5b2f266954718
- ProposalFactory :  0xB3062D8753f971fC2C0F93dc643cA4fa1C17F736
- UnionDaoFactory :  0xD6B84b7000CE841C2C983EeE21a9Fa04Cadb8202
- ChainLinkOracle : 0x9490aEeCb609a4128E5cceDAf9dEC24c24B92047

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






