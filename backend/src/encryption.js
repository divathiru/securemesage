const crypto = require('crypto');

const encryptMessage = (message, key) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(key, 'hex'), iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const tag = cipher.getAuthTag().toString('hex');
    return iv.toString('hex') + tag + encrypted;
};

const decryptMessage = (encryptedMessage, key) => {
    const iv = Buffer.from(encryptedMessage.slice(0, 32), 'hex');
    const tag = Buffer.from(encryptedMessage.slice(32, 64), 'hex');
    const encrypted = encryptedMessage.slice(64);
    const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(key, 'hex'), iv);
    decipher.setAuthTag(tag);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

module.exports = { encryptMessage, decryptMessage };