#Finance Backend API

This project is a simple backend system for managing financial records.  
I built this to understand how real backend systems handle authentication, user roles, and data processing.


##  Features

- User registration and login
- JWT-based authentication
- Role-based access control (user/admin)
- Create and view financial records
- Dashboard summary (income, expenses, balance)


##  Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)

##  Setup Instructions

1. Clone the repository:

git clone https://github.com/Lohithsharma/finance-backend.git


2. Navigate to the project folder:

cd finance-backend


3. Install dependencies:

npm install


4. Create a `.env` file in the root and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


5. Run the server:

npm run dev


##  Authentication

After logging in, you will receive a JWT token.

Use it in protected routes like this:

Authorization: Bearer <your_token>


##  API Endpoints

### Auth
- POST /api/auth/register → Register a new user  
- POST /api/auth/login → Login and get token  

### Records
- POST /api/records → Create a financial record  
- GET /api/records → Get all records of logged-in user  

### Dashboard
- GET /api/dashboard → Get summary (income, expense, balance)

##  Roles

- User → Can create and view records  
- Admin → Can access all features (extendable)

##  Notes

- Passwords are hashed using bcrypt before storing  
- JWT is used to protect routes  
- Each record is linked to a specific user  
- Dashboard is calculated based on user’s records  


This project focuses more on backend logic and structure rather than UI.  
It demonstrates how APIs, authentication, and role-based access control work together in a real-world scenario.
After This

Run:

git add README.md
git commit -m "Added README"
git push

That’s it.
 Your project is now submission-ready ..
