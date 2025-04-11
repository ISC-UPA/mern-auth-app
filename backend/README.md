# MERN Authentication App - Backend

## Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud instance)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd mern-auth-app/backend
   ```

2. **Install Dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the Server**
   Start the backend server using:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication Routes

- **POST /api/auth/register**
  - Registers a new user.
  - Requires `username`, `email`, and `password`.
  - Validates unique fields and hashes the password.

- **POST /api/auth/login**
  - Logs in a user.
  - Requires `email` and `password`.
  - Returns a JWT valid for 24 hours upon successful login.

## Testing the API
You can use tools like Postman or curl to test the API endpoints.

## Notes
- Ensure MongoDB is running before starting the server.
- Use a strong JWT secret for production environments.

## License
This project is licensed under the MIT License.