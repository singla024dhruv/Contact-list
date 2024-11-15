Contact Management Application

This is a simple Contact Management Application built using Node.js, Express.js, EJS, and MongoDB. The application allows users to manage their contact list, including adding, viewing, and deleting contacts.

Features
Home Page: Displays a list of all saved contacts.
Add Contact: Allows users to add a new contact with a name and phone number.
Delete Contact: Enables users to delete a contact by selecting it from the list.
Dynamic Rendering: Views are rendered dynamically using EJS templating.
Database Integration: Contacts are stored and retrieved from a MongoDB database.



Installation and Setup
Prerequisites
Before running this project, ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (Local or Cloud instance)
Steps to Setup
Clone the repository:

bash
Copy code:
git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app


Install dependencies:
bash
Copy code
npm install
Setup MongoDB:

Make sure your MongoDB server is running.
Update the MongoDB connection URL in ./config/mongoose.js if necessary.
Start the server:

bash
Copy code






How to Contribute
Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes and push them to your branch.
Create a pull request to the main branch.
node index.js
