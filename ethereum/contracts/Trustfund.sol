pragma solidity ^0.6.2;
contract TrustfundCorporation {
    address[] public deployedTrustfunds;

    function createTrustfund(uint minimum) public{
      //  address newTrustfund =  address(new Trustfund(minimum));
       address newTrustfund =  address(new Trustfund(minimum, msg.sender));
       deployedTrustfunds.push(newTrustfund);
    }

    function getDeployedTrustfunds() public view returns (address[] memory){
       return deployedTrustfunds;
    }

}
contract Trustfund {
    struct Request{
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address=> bool) approvals;
    }


    Request[] public requests;
    address public manager;
    uint public minimumcontribution;
   // address[] public approvers;
   mapping(address => bool) public approvers;
   uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor (uint minimum, address creator) public{
      //  constructor (uint minimum) public{
     // manager = address (0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c);
        manager = creator;
       minimumcontribution = minimum;
    }


    function contribute() public payable{
        require (msg.value > minimumcontribution);
       // approvers.push(msg.sender); // push is available only to arrays
       approvers[msg.sender] = true;
       approversCount++;
    }

    function createRequest(string memory description, uint value, address payable recipient) public restricted {
      //  require (approvers[msg.sender]);//this will check if function is called by an approver
        Request memory newRequest = Request({
            description : description,
            value : value,
            recipient : recipient,
            complete : false,
            approvalCount : 0
            //mapping was a reference type so not needed to be initialised like the other value types
        });
        requests.push(newRequest);
    }


    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender]= true;
        request.approvalCount++;
    }


    function finalizeRequest(uint index) public restricted{
          Request storage request = requests[index];
          require(request.approvalCount > (approversCount/2));
        require (!request.complete);
        request.recipient.transfer(request.value);
        request.complete = true;
    }
}
