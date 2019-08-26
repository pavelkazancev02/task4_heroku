pragma solidity ^0.5.8;

contract MyContract {

	address payable owner;
	uint threshold = 1 ether;

    constructor () public {
        owner = msg.sender;
    }
    
    function() external payable {
    }

    function get() public view returns(string memory) {
        return uint2str(address(this).balance);
    }

    function withdrawal () public {
        require(address(this).balance >= threshold);
    	owner.transfer(address(this).balance);
    }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
    if (_i == 0) {
        return "0";
    }
    uint j = _i;
    uint len;
    while (j != 0) {
        len++;
        j /= 10;
    }
    bytes memory bstr = new bytes(len);
    uint k = len - 1;
    while (_i != 0) {
        bstr[k--] = byte(uint8(48 + _i % 10));
        _i /= 10;
    }
    return string(bstr);
    }
}