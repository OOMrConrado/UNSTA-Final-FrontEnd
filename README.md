# 📂 Tienda - React + JSON Server CRUD App

This is a simple web project developed for a university assignment. It demonstrates how to manage products in a store using a visual interface. The application is built with React and uses `json-server` to simulate a RESTful API, allowing real-time interaction through AJAX requests. It's designed for educational purposes, focusing on learning and practicing basic CRUD operations (Create, Read, Update, Delete).


## 🚀 Prerequisites

* Node.js installed ([Download here](https://nodejs.org/)) — v18 or higher recommended.
* A terminal or command prompt.

## 📦 Installation

1. **Clone the repository** or download it manually:

   ```bash
   git clone https://github.com/your-username/tienda.git
   ```

2. **Navigate into the project folder:**

   ```bash
   cd tienda
   ```

3. **Install all dependencies**:

   ```bash
   npm install
   ```

   > ⚠️ The `node_modules` folder is not included in the repository due to its size. Running `npm install` will fetch everything automatically.

## 🧪 Available Scripts

### Start both servers simultaneously 

### You would need to install this command to execute both app and .json server

```bash
npm install concurrently --save-dev
```
### Then just run this command in the terminal

```bash
npm run dev:full
```

This command runs both the frontend and the backend in parallel using the `concurrently` package.

* React app: [http://localhost:5173](http://localhost:5173)
* JSON server: [http://localhost:3001](http://localhost:3001)

## 📂 Project Structure

* `db.json`: The mock database used by `json-server`.
* `src/`: The React application source code.
* `package.json`: Contains all dependencies and scripts.
