// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BoxV1 is Initializable {
    uint256 private value;

    event ValueChanged(uint256 oldValue, uint256 newValue);

    function initialize(uint256 _value) external initializer {
        value = _value;
    }

    function setValue(uint256 newValue) external {
        uint256 oldValue = value;
        value = newValue;
        emit ValueChanged(oldValue, newValue);
    }

    function getValue() external view returns (uint256) {
        return value;
    }
}
