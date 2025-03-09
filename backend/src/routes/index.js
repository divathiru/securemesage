const express = require('express');
const router = express.Router();
const messageController = require('../controllers/index');

// Route to send a message
router.post('/messages/send', messageController.sendMessage);

// Route to retrieve messages
router.get('/messages', messageController.getMessages);

module.exports = router;