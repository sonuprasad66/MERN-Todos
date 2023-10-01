==> Todos Application With User Registration and Authentication.

==> Introduction

--> A Full-Stack Todos application with API endpoints for user registration, Authentication, Authorization, and Todos management

==> Technologies Used For Backend

- Node Js
- Express Js
- MongoDB (Database)
- Mongoose (Connecting Database)
- Bcrypt (Password hashing)
- Jsonwebtoken (Generate a token)
- Dotenv (Hide the secret data like MONGO_URL, SECRET_KEY, etc)

==> Technologies Used For Frontend

- React Js
- Redux Js
- Redux Thunk
- React Router
- React Icons
- Chakra UI
- Chakra Icons

==> Getting Started

- Onlive server you can go with this API.
  --> Backend: https://dpdzero.onrender.com/
  --> Frontend: https://sonu-todos.vercel.app/

(A) Environment Setup

1. Clone the repository:
   --> git clone https://github.com/sonuprasad66/Nirvedha-Research.git

   --> cd Nirvedha-Research

==> For Backend Setup:-

--> cd backend

==> For Frontend Setup:-

--> cd frontend

2. Install dependencies:
   --> npm install

3. Start the server:
   --> npm start

==> API Documentation

--> The API provides the following endpoints:

- POST /signup: Register a new user.
- POST /login: Login a user.
- GET /profile: Current user profile with authentication.
- GET /todos: Get all todos list of login user.
- POST /create: Create new todo task.
- DELETE /delete/:todoId - Delete a todo task.
- PATCH /update/:todoId - Update existing todo.

==> Contributing

--> Contributions are welcome! If you find any issues or have suggestions for improvements,
feel free to create a pull request or submit an issue.
