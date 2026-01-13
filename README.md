# Full Stack Social Media Web Development Project

⚠️ **Disclaimer**: This project was built strictly for **learning and practice purposes**. It is **not production‑ready** and is **no longer actively maintained**.

---

## 📚 Acknowledgement

This project was created by following and learning from a YouTube tutorial.

The primary purpose of this repository is educational — to understand and practice full-stack web development concepts such as authentication, REST APIs, database relationships, and frontend–backend integration.

While the core idea and guidance came from a tutorial, the code was written as part of hands-on learning and may include minor modifications or personal experimentation.

---

## 📌 Project Overview

This is a **full‑stack web application** developed to understand and practice modern web development concepts, including frontend–backend integration, authentication, REST APIs, and database interactions.

The project helped solidify concepts such as:

* Client–server architecture
* Authentication & authorization
* CRUD operations
* React routing and state management
* Backend API design

---

## 🧩 Tech Stack

### Frontend

* **React (18)**
* **React Router v6** for routing
* **Axios** for API communication
* **Context API** for authentication state
* **Material UI (MUI)** for UI components
* **Formik + Yup** for form handling & validation

### Backend

* **Node.js**
* **Express.js**
* **Sequelize ORM**
* **MySQL** database
* **JWT (JSON Web Tokens)** for authentication
* **bcrypt** for password hashing

---

## 🔐 Authentication Flow

* User registration & login
* JWT token stored in `localStorage`
* Protected routes using custom middleware
* Token verification on every protected request

---

## ✨ Features

* User authentication (Register / Login / Logout)
* Create, view, and delete posts
* Comment system
* Like system
* User profile page
* Change password functionality
* Protected routes (frontend & backend)

---

## 📂 Project Structure

```
FULL STACK WEB DEV
│
├── client_front
│   ├── src
│   │   ├── pages
│   │   ├── helpers
│   │   ├── App.js
│   ├── public
│   ├── package.json
│   └── .gitignore
│
├── server_back
│   ├── routes
│   ├── models
│   ├── middleWares
│   ├── index.js
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

## ▶️ How to Run Locally

### Prerequisites

* Node.js
* MySQL
* npm

---

### Backend Setup

```bash
cd server_back
npm install
npm start
```

Backend runs on:

```
http://localhost:3002
```

---

### Frontend Setup

```bash
cd client_front
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🛑 Notes

* Environment variables are intentionally excluded
* Database credentials must be configured manually
* Error handling is basic and intended for learning

---

## 🚧 Limitations

* Not optimized for production
* No deployment setup
* Minimal security hardening
* UI not fully responsive

---

## 🎯 Learning Outcomes

This project was built to:

* Practice full‑stack development
* Understand JWT‑based authentication
* Learn Sequelize & relational databases
* Work with React routing & global state

---

## 📌 Status

✅ **Completed**
❌ **Not under active development**

---

## 📄 License
This project is licensed under the MIT License.

---

## 🧑‍💻 Author

**Rimi Halder**

---

⭐ If you are a recruiter or reviewer: this repository demonstrates **learning ability, consistency, and understanding of full‑stack fundamentals** rather than a production‑ready application.
