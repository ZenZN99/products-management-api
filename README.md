🛒 Products Management API (CRUD)
📝 About

Products Management API is a professional Back-End project for managing products in a clean and structured way.
It allows registered users to create, read, update, and delete products, each with a title, price, taxes, ads, discount, total, category, and count.
All operations are user-specific, meaning each user can only manage their own products.

Developed using Node.js + Express.js + MongoDB with JWT authentication to secure all routes.

🚀 Features

🔐 User registration, login, and JWT authentication

📦 Add / Edit / Delete / View products

💰 Automatic total calculation (price + taxes + ads - discount)

👤 User-specific product management

⚙️ Fully ready API for connection with a professional Front-End

🧩 Technologies Used

Node.js · Express · MongoDB · JWT · bcryptjs · dotenv · CORS

⚙️ Setup

1️⃣ Clone the repository

git clone https://github.com/ZenZN99/products-management-api.git
cd products-management-api


2️⃣ Install dependencies

npm install


3️⃣ Environment variables (.env)

PORT=your_port
DATABASE=your_mongodb_url
JWT_SECRET=your_jwt_secret


4️⃣ Run the server

npm run start


Server will run on http://localhost:PORT

🔗 Main API Endpoints
🔸 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
POST	/api/auth/me	Get current user info (requires Bearer token)
🔸 Products
Method	Endpoint	Description
POST	/api/products	Create a product (Authenticated users only)
GET	/api/products	Get all your products
PUT	/api/products/:id	Update a product (Authenticated users only)
DELETE	/api/products/:id	Delete a product (Authenticated users only)
🧪 Testing (Postman)

Register a new user or log in to get a JWT Token.

Add the token to your request headers:

Authorization: Bearer <your_token>


Try all product routes (create, read, update, delete).

💡 Notes

Only authenticated users can manage products.

The total field is automatically calculated as:

total = price - discount + taxes + ads


Each user can only manage their own products.

🧾 License

MIT License © 2025 Zen Lahham
