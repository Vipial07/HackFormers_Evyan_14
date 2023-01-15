//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Election {
    struct Candidate {
        string name;
        uint age;
        string party;
        uint numVotes;
    }

    struct Voter {
        string name;
        string fathername;
        string phone_number;
        string email;
        string age;
        bool authorised;
        uint whom;
        bool voted;
    }

    address public owner;
    string public electionName;

    mapping(address => Voter) public voters;
    Candidate[] public candidates;
    uint public totalVotes;

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    function startElection(string memory _electionName) public {
        owner = msg.sender;
        electionName = _electionName;
    }

    function addCandidate(
        string memory _name,
        uint _age,
        string memory _party
    ) public ownerOnly {
        candidates.push(Candidate(_name, _age, _party, 0));
    }

    function addVoter(
        address _voterAddress,
        string memory _name,
        string memory _fathername,
        string memory _phone_number,
        string memory _email_address,
        string memory _age
    ) public ownerOnly {
        voters[_voterAddress].authorised = false;
        voters[_voterAddress].name = _name;
        voters[_voterAddress].age = _age;
        voters[_voterAddress].fathername = _fathername;
        voters[_voterAddress].phone_number = _phone_number;
        voters[_voterAddress].email = _email_address;
        //(Voters(_name,_fathername,_phone_number,_email_address,_age ));
    }

    function authorizeVoter1(address _voterAddress) public ownerOnly {
        voters[_voterAddress].authorised = true;

        //(Voters(_name,_fathername,_phone_number,_email_address,_age ));
    }

    function getNumCandidates() public view returns (uint) {
        return candidates.length;
    }

    function vote(uint candidateIndex) public {
        require(!voters[msg.sender].voted);
        require(voters[msg.sender].authorised);
        voters[msg.sender].whom = candidateIndex;
        voters[msg.sender].voted = true;

        candidates[candidateIndex].numVotes++;
        totalVotes++;
    }

    function getTotalVotes() public view returns (uint) {
        return totalVotes;
    }

    function candidateInfo(uint index) public view returns (Candidate memory) {
        return candidates[index];
    }
}
