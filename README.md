# 🎵 Music Streaming Backend API

A complete Music Streaming Backend API built using Node.js, Express.js, MongoDB, JWT Authentication, Multer, and ImageKit.

This backend supports:
- User Authentication
- Artist & User Roles
- Music Upload
- Album Creation
- JWT Authorization
- File Upload using Multer
- Cloud Storage using ImageKit

---

# 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- ImageKit
- Cookie Parser

---

# 📂 Features

✅ User Registration & Login  
✅ Artist Authentication Middleware  
✅ Upload Music Files  
✅ Create Albums  
✅ Get All Music  
✅ Get Albums  
✅ JWT Protected Routes  
✅ Cloud File Upload using ImageKit  

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

---

## 2️⃣ Move to Project Folder

```bash
cd YOUR_PROJECT_NAME
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3000

MONGO_URI=YOUR_MONGODB_CONNECTION_URL

JWT_SECRET=YOUR_SECRET_KEY

IMAGE_KIT=YOUR_IMAGEKIT_PRIVATE_KEY

IMAGEKIT_URL_ENDPOINT=YOUR_IMAGEKIT_URL_ENDPOINT
```

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

---

## Production Mode

```bash
npm start
```

---

# 📌 API Endpoints

# 🔐 Authentication APIs

---

## Register User

### Endpoint

```http
POST /api/auth/register
```

### URL

```text
http://localhost:3000/api/auth/register
```

### Request Body

```json
{
  "username": "hashim",
  "email": "hashim@gmail.com",
  "password": "123456",
  "role": "artist"
}
```

---

## Login User

### Endpoint

```http
POST /api/auth/login
```

### URL

```text
http://localhost:3000/api/auth/login
```

### Request Body

```json
{
  "email": "hashim@gmail.com",
  "password": "123456"
}
```

---

# 🎵 Music APIs

---

## Upload Music

### Endpoint

```http
POST /api/music/upload
```

### URL

```text
http://localhost:3000/api/music/upload
```

### Form Data

| Key   | Type |
|------|------|
| title | Text |
| music | File |

---

## Get All Music

### Endpoint

```http
GET /api/music/almusic
```

### URL

```text
http://localhost:3000/api/music/almusic
```

---

# 💿 Album APIs

---

## Create Album

### Endpoint

```http
POST /api/music/album
```

### URL

```text
http://localhost:3000/api/music/album
```

### Request Body

```json
{
  "title": "My First Album",
  "musicId": "YOUR_MUSIC_ID"
}
```

---

## Get All Albums

### Endpoint

```http
GET /api/music/albums
```

### URL

```text
http://localhost:3000/api/music/albums
```

---

## Get Album By ID

### Endpoint

```http
GET /api/music/albums/:albumId
```

### Example URL

```text
http://localhost:3000/api/music/albums/6a0eecf4fcc4aa004cef2349
```

---

# 🔒 Authentication & Authorization

This project uses JWT Authentication.

## Roles

### Artist
Artists can:
- Upload Music
- Create Albums

### User
Users can:
- Listen to Music
- View Albums

---

# ☁️ File Upload

Music files are uploaded using:
- Multer
- ImageKit

Uploaded files are stored securely on ImageKit Cloud.

---

# 📁 Project Structure

```bash
src/
│
├── AuthController/
├── middleware/
├── models/
├── Routes/
├── services/
│
server.js
```

---

# 👨‍💻 Author

## Muhammad Hashim

MERN Stack Developer

---

# 📜 License

This project is open-source and available for learning purposes.