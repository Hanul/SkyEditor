pragma solidity ^0.4.6;

import "./test/test.sol";

contract FairyOwnerInfo {
	
	function FairyOwnerInfo(uint256 initData, address initOwner) {
    }
    
	mapping (address => string) public names;
	
	function saveName(string name) public {
        names[msg.sender] = name;
    }
}