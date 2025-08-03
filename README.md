# node-express-chat-application

# Node.js & Express Chat Application

A simple, real-time web chat application built with Node.js, Express, and MongoDB. This project allows users to send, receive, edit, and delete messages in a clean, modern interface. It serves as a practical demonstration of building a full-stack CRUD (Create, Read, Update, Delete) application.

## ✨ Features

- **Create & Send Messages**: Users can compose and send new messages to other users.
- **View All Chats**: A central feed displays all the chats in a clean, organized manner.
- **Edit Messages**: Users can modify the content of their sent messages.
- **Delete Messages**: Users can delete messages with a custom confirmation popup to prevent accidental deletion.
- **Modern UI**: A responsive and aesthetically pleasing user interface styled with custom CSS.
- **RESTful API**: Follows REST principles for handling chat operations.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS (Embedded JavaScript templates) for server-side rendering
- **Styling**: HTML5 & Custom CSS
- **Dev Tools**: `method-override` for handling PUT and DELETE requests from forms.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/node-express-chat.git](https://github.com/your-username/node-express-chat.git)
    cd node-express-chat
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Connect to your MongoDB database:**
    Open the `index.js` file and ensure the MongoDB connection string points to your local database instance. The default is set to:
    ```javascript
    mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    ```

4.  **Run the application:**
    ```sh
    node index.js
    ```
    The server will start on `http://localhost:8080`. Open this URL in your browser to use the application.

## 📂 File Structure


    node-express-chat/
    ├── models/
    │   └── chat.js         # Mongoose schema for chats
    ├── public/
    │   └── style.css       # Custom styles for the application
    ├── views/
    │   ├── edit.ejs        # Page to edit an existing chat
    │   ├── index.ejs       # Main page displaying all chats
    │   └── new.ejs         # Page to create a new chat
    ├── .gitignore          # Files to be ignored by Git
    ├── index.js            # Main server file with Express setup and routes
    ├── package.json        # Project dependencies and scripts
    └── README.md           # You are here!

    # 📄 License

        This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.