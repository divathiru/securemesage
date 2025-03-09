// filepath: secure-messaging-app/blockchain/contracts/Messaging.sol
pragma solidity ^0.8.0;

contract Messaging {
    struct Message {
        address sender;
        address receiver;
        string content;
        uint timestamp;
    }

    Message[] public messages;

    event MessageSent(address indexed sender, address indexed receiver, string content, uint timestamp);

    function sendMessage(address _receiver, string memory _content) public {
        Message memory newMessage = Message({
            sender: msg.sender,
            receiver: _receiver,
            content: _content,
            timestamp: block.timestamp
        });

        messages.push(newMessage);
        emit MessageSent(msg.sender, _receiver, _content, block.timestamp);
    }

    function getMessages() public view returns (Message[] memory) {
        return messages;
    }
}