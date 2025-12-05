// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VeriVerseProof {
    struct Proof {
        string proofId;
        string agentId;
        string ipfsHash;
        uint256 timestamp;
        address submitter;
    }

    mapping(string => Proof) public proofs;
    string[] public proofIds;

    event ProofStored(string indexed proofId, string agentId, string ipfsHash, uint256 timestamp);

    function storeProof(string memory _proofId, string memory _agentId, string memory _ipfsHash) public {
        require(bytes(proofs[_proofId].proofId).length == 0, "Proof ID already exists");

        proofs[_proofId] = Proof({
            proofId: _proofId,
            agentId: _agentId,
            ipfsHash: _ipfsHash,
            timestamp: block.timestamp,
            submitter: msg.sender
        });

        proofIds.push(_proofId);
        emit ProofStored(_proofId, _agentId, _ipfsHash, block.timestamp);
    }

    function getProof(string memory _proofId) public view returns (Proof memory) {
        return proofs[_proofId];
    }

    function getAllProofIds() public view returns (string[] memory) {
        return proofIds;
    }
}
