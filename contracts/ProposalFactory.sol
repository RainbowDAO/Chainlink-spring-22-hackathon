// SPDX-License-Identifier: Apache
pragma solidity ^0.8.0;
import './Governor.sol';
import './interface/IProposalFactory.sol';
import './interface/IContractRegister.sol';
contract ProposalFactory is IProposalFactory {
    address[] public GovernorDaos;
    address public router;
    constructor(address _router){
        router = _router;
    }
    function newProposal(address _govToken) external override returns(address) {
        address ChainLinkOracle = IContractRegister(router).routers('ChainLinkOracle');
        Governor ud = new Governor(_govToken,ChainLinkOracle);
        GovernorDaos.push(address(ud));
        return address(ud);
    }
    // get the dao count
    function getProposalDaosLength() public view returns(uint){
        return GovernorDaos.length;
    }
}
