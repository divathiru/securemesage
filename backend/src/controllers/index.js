const express = require('express');
const { encryptMessage, decryptMessage } = require('../encryption');

const router = express.Router();

// Placeholder for message storage
let messages = [];

// Route to send a message
router.post('/send', (req, res) => {
    const { message, key } = req.body;
    const encryptedMessage = encryptMessage(message, key);
    messages.push(encryptedMessage);
    res.status(201).json({ success: true, encryptedMessage });
});

// Route to retrieve messages
router.get('/messages', (req, res) => {
    const decryptedMessages = messages.map(encryptedMessage => {
        // Assuming a key is provided for decryption
        const key = req.query.key; 
        return decryptMessage(encryptedMessage, key);
    });
    res.status(200).json({ messages: decryptedMessages });
});

module.exports = router;