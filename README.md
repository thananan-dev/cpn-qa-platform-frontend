# cpn-qa-platform-frontend

# 📌 Features

#### ``Important`` 

- This application is a prototype/mock-up and uses mock data instead of connecting to a live API.

## 🔐 Authentication


- **`LOGIN`** `/login` – Authenticate a user

Accounts for login testing

| Email | Password |
| ------------- | ------------- |
| adminDev@mail.com | 1234 |
| adminTester@mail.com | 1234 |

![image](https://github.com/user-attachments/assets/c44ba43a-d261-4fd5-8e48-fe3c13eb7be2)

- **`SIGN UP`** `/sign-up` – Register a new user account
- **`ROUTE PROTECTION`** – Protect route

## 📝 Dashboard

- **`FETCH ALL POST`**  – Retrieve all posts

![image](https://github.com/user-attachments/assets/95ee53c6-2805-4acf-97a2-f36c6a7de7d0)

- **`ADD A POST`**  – Create a new post

## 💬 POST

- **`GET POST`**  – Retrieve a specific post by ID
  
![image](https://github.com/user-attachments/assets/829efe52-6621-4808-8f60-6a39fd797412)


## 💬 Comments

- **`ADD COMMENT`** – Create a new comment

### 🧑‍💻 Getting Started

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and npm installed on your system.
- Postgres database and setup config in .env file
  
### Installation

1. Clone the repository:

  ```bash
   git clone https://github.com/your-username/cpn-qa-platform-frontend.git
   cd cpn-qa-platform-frontend
  ```

2. Install dependencies

  ```bash
    npm install or yarn
  ```
3. Run server
  ```bash
    npm run dev or yarn dev
  ```

