# Quick Start Guide

## Option 1: Using Docker Compose (Easiest)

```bash
# Clone the repository
git clone https://github.com/somkheartk/admin-template-nextjs-tailwincss.git
cd admin-template-nextjs-tailwincss

# Start all services (MongoDB, Backend, Frontend)
docker-compose up -d

# Wait for services to start (about 30 seconds)
# Access the application at http://localhost:3000
```

## Option 2: Manual Development Setup

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env if needed (default MongoDB: mongodb://localhost:27017/warehouse)

# Start MongoDB (if not using Docker)
# Make sure MongoDB is running on localhost:27017

# Run in development mode
npm run start:dev

# Backend will be available at http://localhost:4000
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run in development mode
npm run dev

# Frontend will be available at http://localhost:3000
```

## First Time Setup

1. **Access the application**: Open http://localhost:3000 (or http://localhost:3000/en/login)

2. **Create an admin account**: 
   ```bash
   # Use the backend API to create an admin user
   curl -X POST http://localhost:4000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "admin@example.com",
       "password": "admin123",
       "name": "Admin User",
       "role": "admin"
     }'
   ```

3. **Login**: Use the credentials from step 2 to login

4. **Explore the features**:
   - Dashboard: Overview of products, orders, and statistics
   - Products: Manage warehouse products (Admin/Manager can add/edit)
   - Orders: View and manage orders
   - Users: User management (Admin only)
   - Language Switcher: Switch between English and Thai

## User Roles

- **Admin**: Full access to all features
- **Manager**: Can manage products and orders
- **User**: Can view products and manage their own orders

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### E2E Tests (Robot Framework)
```bash
# Install Robot Framework
pip install robotframework robotframework-seleniumlibrary robotframework-requests

# Make sure all services are running
docker-compose up -d

# Run tests
robot --outputdir tests/results tests/robot/
```

## Technology Stack

- **Frontend**: Next.js 15, React, TailwindCSS, TypeScript
- **Backend**: NestJS, MongoDB, Mongoose, JWT
- **Testing**: Jest, Robot Framework
- **DevOps**: Docker, Docker Compose, GitHub Actions

## Features Implemented

✅ Role-based access control (RBAC)  
✅ Internationalization (English & Thai)  
✅ JWT Authentication  
✅ Product Management  
✅ Order Management  
✅ User Management  
✅ Responsive Design  
✅ Docker Support  
✅ CI/CD Pipeline  
✅ Unit Tests  
✅ E2E Tests  

## Troubleshooting

### Port already in use
If you get port conflicts:
```bash
# Change ports in docker-compose.yml or .env files
```

### MongoDB connection error
```bash
# Make sure MongoDB is running
docker-compose ps

# Check MongoDB logs
docker-compose logs mongodb
```

### Cannot access frontend
```bash
# Check if all services are running
docker-compose ps

# Check frontend logs
docker-compose logs frontend
```

## Support

For issues or questions:
- Create an issue on GitHub
- Check the main README.md for detailed documentation
