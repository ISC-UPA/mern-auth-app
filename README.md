# MERN Authentication App

This project is a simple authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It includes user registration and login functionalities, utilizing JWT for authentication.

## Project Structure

```
mern-auth-app
├── backend
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── auth.js
│   ├── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── RegisterForm.js
│   │   │   └── LoginForm.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── services
│   │       └── api.js
│   ├── public
│   │   └── index.html
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```
   npm start
   ```

The backend server will run on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

The frontend application will run on `http://localhost:3000`.

## Usage

- Register a new user by filling out the registration form.
- Log in using the registered email and password.
- Upon successful login, you will be redirected to the dashboard, which displays a welcome message.

## Error Handling

The application handles incorrect credentials during login and displays an appropriate error message.

## Notes

- Ensure that MongoDB is running before starting the backend server.
- You can customize the JWT secret and MongoDB URI in the `.env` file as needed.

This README provides all the necessary instructions to set up and run the application without needing to install dependencies manually.