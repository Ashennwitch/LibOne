# LibOne

LibOne is a web application that allows users to manage their personal book collection. It provides a user-friendly interface for adding, viewing, updating, and deleting books.

## Features

- View a list of all books in the collection
- Add new books with details such as title, author, description, published year, and genre
- Edit the details of existing books
- Delete books from the collection
- Responsive and intuitive user interface

## Technologies Used

- Frontend:
  - React.js
  - React Router
  - Axios
  - Vite
  - Tailwind CSS
- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Getting Started

To run LibOne on your local machine, follow these steps:

1. Clone the repository
2. Navigate to the backend directory and install the dependencies for the backend:
   ``cd backend
   npm install``
3. Create a `.env` file in the `backend` directory and provide the necessary environment variables:
   ``MONGODB_URI=your-mongodb-connection-url``
   Replace `your-mongodb-connection-url` with the actual connection URL for your MongoDB database.
4. Start the backend server: ``node server.js``
5. Open a new terminal window and navigate to the `frontend` directory:
   ``cd ../frontend``
6. Install the dependencies for the frontend:
   ``npm install``
7. Start the frontend development server:
   ``npm run dev``
8. Open your web browser and visit `http://localhost:5173` to access the Book Collection Manager application.
