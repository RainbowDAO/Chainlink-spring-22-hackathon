const ContractRegister = artifacts.require("ContractRegister");
const DaoFactory = artifacts.require("DaoFactory");
const DaoVaultFactory = artifacts.require("DaoVaultFactory");
const DepartmentFactory = artifacts.require("DepartmentFactory");
const ERC20Factory = artifacts.require("ERC20Factory");
const ProposalFactory = artifacts.require("ProposalFactory");
const ChainLinkOracle = artifacts.require("ChainLinkOracle");
const UnionDaoFactory = artifacts.require("UnionDaoFactory");

module.exports = function (deployer) {
  deployer.deploy(ContractRegister).then(function (){
    deployer.deploy(DaoFactory,ContractRegister.address);
    deployer.deploy(ProposalFactory,ContractRegister.address);
    deployer.deploy(DaoVaultFactory);
    deployer.deploy(DepartmentFactory);
    deployer.deploy(ERC20Factory);
    deployer.deploy(ChainLinkOracle);
    deployer.deploy(UnionDaoFactory);
  })
};

