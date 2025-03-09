const Messaging = artifacts.require("Messaging");

contract("Messaging", (accounts) => {
    let messaging;

    before(async () => {
        messaging = await Messaging.deployed();
    });

    it("should allow a user to send a message", async () => {
        const sender = accounts[0];
        const recipient = accounts[1];
        const message = "Hello, secure world!";
        
        await messaging.sendMessage(recipient, message, { from: sender });
        
        const sentMessage = await messaging.messages(0);
        assert.equal(sentMessage.sender, sender, "Sender address does not match");
        assert.equal(sentMessage.recipient, recipient, "Recipient address does not match");
        assert.equal(sentMessage.content, message, "Message content does not match");
    });

    it("should allow a user to retrieve messages", async () => {
        const recipient = accounts[1];
        const messagesCount = await messaging.getMessagesCount({ from: recipient });
        
        assert.equal(messagesCount.toNumber(), 1, "Message count does not match");
    });

    it("should not allow sending an empty message", async () => {
        const sender = accounts[0];
        const recipient = accounts[1];
        
        try {
            await messaging.sendMessage(recipient, "", { from: sender });
            assert.fail("Expected error not received");
        } catch (error) {
            assert(error.message.includes("Message cannot be empty"), "Error message does not match");
        }
    });
});