# 🎮 gameTraining

A game development training platform built with a Node.js backend and a React frontend.

---

## 🛠 Backend Setup (Located in `be/` Folder)

1. **Navigate to the backend folder:**
   ```bash
   cd be
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Update Environment Variables:**

   - Create a `.env` file in the `be/` folder if not already present.
   - Update it to match your local MySQL configuration:
     ```env
     DB_HOST=localhost
     DB_USER=your_mysql_user
     DB_PASSWORD=your_mysql_password
     DB_NAME=game_dev_training
     ```

4. **Start the backend server in development mode:**
   ```bash
   npm run dev
   ```

5. **Import the initial database data:**

   After running the backend server:

   - Use the `data.sql` file to populate your MySQL database:
     ```bash
     mysql -u your_mysql_user -p game_dev_training < data.sql
     ```

---

## 🎨 Frontend Setup (Located in `fe/` Folder)

1. **Navigate to the frontend folder:**
   ```bash
   cd fe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set environment variables:**

   - Create a `.env` file in the `fe/` folder if not present.
   - Set the API base URL to point to your backend server:
     ```env
     VITE_API_BASE_URL=http://localhost:5000/api
     ```

4. **Run the frontend app:**
   ```bash
   npm run dev
   ```

---

## 🔐 Admin Credentials

Use the following credentials to log in to the admin panel:

```json
{
  "username": "admin1",
  "password": "SuperSecure123!"
}
```

---

## 📄 API Documentation

The Swagger API documentation is available at:

👉 [http://localhost:5000/api-docs/#/](http://localhost:5000/api-docs/#/)

---

## 📌 Notes

- Make sure your database is running and accessible before importing `data.sql`.
- Ensure both frontend and backend `.env` files are correctly configured.
- Backend must be running for frontend to successfully connect and retrieve data.

---
