# MERN Authentication App - Frontend

## Overview
This is the frontend part of the MERN Authentication App, which allows users to register and log in using their credentials. The application is built with React and communicates with a backend API for user authentication.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd mern-auth-app/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

### Features
- User Registration: Users can create an account by providing a username, email, and password.
- User Login: Users can log in using their email and password.
- JWT Authentication: Upon successful login, a JWT is stored in localStorage for session management.
- Dashboard: After logging in, users are redirected to a simple dashboard displaying a welcome message.

### Error Handling
The application handles incorrect credentials during login and displays an appropriate error message.

## Folder Structure
```
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── LoginForm.js
│   │   └── RegisterForm.js
│   ├── services
│   │   └── api.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Additional Notes
- Ensure that the backend server is running and accessible for the frontend to communicate with it.
- Modify the API endpoint URLs in `src/services/api.js` if the backend is hosted on a different URL.

## License
This project is licensed under the MIT License.