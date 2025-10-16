# Warehouse Management System - Admin Template

A professional, production-ready admin template for warehouse management built with Next.js, NestJS, and MongoDB. Features beautiful UI, role-based access control, multi-language support, and comprehensive testing.

## 🌟 Features

### Frontend (Next.js + TailwindCSS)
- ✨ Modern, responsive UI with TailwindCSS
- 🌍 Internationalization (i18n) - English & Thai
- 🔐 JWT-based authentication
- 👥 Role-based access control (Admin, Manager, User)
- 📱 Mobile-friendly design
- 🎨 Professional UI components
- ⚡ Fast page loads with Next.js App Router

### Backend (NestJS + MongoDB)
- 🔒 Secure authentication with JWT
- 👤 User management with roles
- 📦 Product management
- 📋 Order management
- 🛡️ Role-based authorization guards
- 🗄️ MongoDB with Mongoose ODM
- ✅ Input validation with class-validator

### DevOps & Testing
- 🐳 Docker & Docker Compose support
- 🔄 CI/CD pipeline with GitHub Actions
- ✨ Unit tests (Jest)
- 🤖 E2E tests with Robot Framework
- 📊 Test coverage reports

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB 7+
- Docker & Docker Compose (optional)

### Using Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/somkheartk/admin-template-nextjs-tailwincss.git
cd admin-template-nextjs-tailwincss

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:4000/api
```

### Manual Setup

#### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Run in development
npm run start:dev

# Run tests
npm test

# Build for production
npm run build
npm run start:prod
```

#### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build
npm run start
```

## 📁 Project Structure

```
.
├── backend/                  # NestJS backend
│   ├── src/
│   │   ├── auth/            # Authentication module
│   │   ├── users/           # Users module
│   │   ├── products/        # Products module
│   │   ├── orders/          # Orders module
│   │   └── app.module.ts    # Main application module
│   ├── test/                # E2E tests
│   └── Dockerfile
│
├── frontend/                # Next.js frontend
│   ├── app/
│   │   └── [locale]/       # Localized routes
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   └── layout/         # Layout components
│   ├── contexts/           # React contexts
│   ├── lib/                # Utilities and API client
│   ├── messages/           # i18n translations
│   └── Dockerfile
│
├── tests/
│   └── robot/              # Robot Framework tests
│
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│
└── docker-compose.yml      # Docker compose configuration
```

## 🔑 Default Credentials

After setting up, you can create an admin user:

```bash
# Using the backend API
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "admin123",
    "name": "Admin User",
    "role": "admin"
  }'
```

## 👥 User Roles

- **Admin**: Full access to all features
- **Manager**: Can manage products and orders
- **User**: Can view products and manage their own orders

## 🌍 Supported Languages

- English (en)
- Thai (th)

Switch languages using the language selector in the header.

## 🧪 Testing

### Unit Tests (Backend)
```bash
cd backend
npm test
```

### E2E Tests (Robot Framework)
```bash
# Install Robot Framework
pip install robotframework robotframework-seleniumlibrary robotframework-requests

# Run tests
robot --outputdir tests/results tests/robot/
```

## 🐳 Docker Commands

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Remove volumes
docker-compose down -v
```

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Get current user profile

### Products Endpoints
- `GET /api/products` - List all products
- `POST /api/products` - Create product (Admin/Manager)
- `PUT /api/products/:id` - Update product (Admin/Manager)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders Endpoints
- `GET /api/orders` - List all orders (Admin/Manager)
- `GET /api/orders/my-orders` - Get user's orders
- `POST /api/orders` - Create order
- `PUT /api/orders/:id/status` - Update order status (Admin/Manager)

### Users Endpoints
- `GET /api/users` - List all users (Admin only)

## 🔧 Configuration

### Backend Environment Variables
```env
MONGODB_URI=mongodb://mongodb:27017/warehouse
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=4000
FRONTEND_URL=http://localhost:3000
```

### Frontend Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js Team
- NestJS Team
- TailwindCSS Team
- Heroicons
- All contributors and supporters

## 📞 Support

For support, email support@example.com or create an issue in the repository.