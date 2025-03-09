// This file exports TypeScript types and interfaces used throughout the backend application.

export interface Message {
    id: string;
    sender: string;
    recipient: string;
    content: string;
    timestamp: Date;
}

export interface User {
    id: string;
    username: string;
    publicKey: string;
}

export interface EncryptedMessage {
    iv: string;
    tag: string;
    encryptedContent: string;
}