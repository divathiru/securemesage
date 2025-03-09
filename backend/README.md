# Secure Messaging App - Backend

This directory contains the backend implementation of the Secure Messaging App using Express.js. The backend is responsible for handling secure messaging functionalities, including message encryption and decryption, as well as managing API routes for communication with the frontend.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: Entry point of the Express application.
  - **controllers/**: Contains request handling logic.
    - **index.js**: Exports functions for handling message-related requests.
  - **routes/**: Defines the API routes for the application.
    - **index.js**: Sets up the routes and links them to the appropriate controllers.
  - **encryption.js**: Implements functions for encrypting and decrypting messages.
  - **types/**: Contains TypeScript types and interfaces used in the backend.
    - **index.js**: Exports the types and interfaces.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd secure-messaging-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

- **POST /messages**: Send a new message.
- **GET /messages**: Retrieve all messages.

## Security

The backend uses AES-256-GCM encryption for secure message transmission. Ensure that the encryption keys are managed securely.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.