# Express TypeScript Blog API with AdminJS Integration

This project serves as a simple starting point for developing a backend API using Express, MongoDB, AdminJS, TypeScript, and ESModules.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)
- MongoDB (https://www.mongodb.com/try/download/community)

### Clone the Repository

```bash
git clone https://github.com/your-username/express-ts-blog-adminjs.git
cd express-ts-blog-adminjs
```

### Install Dependencies

```bash
npm install
```

## Running in Development Mode

### Run the Development Server

Execute `npm run dev` to start the server in development mode using `tsx` for live TypeScript compilation. The server will be accessible at http://localhost:3000.

### Admin Panel

Access the AdminJS panel by navigating to http://localhost:3000/admin.

## Production

### Build the TypeScript Code

Run `npm run build`.

### Run the Production Server

Execute `npm start` to compile the TypeScript code into JavaScript and start the server in production mode. The server will be accessible at http://localhost:3000.

## Configuration

### MongoDB Connection

Ensure that your MongoDB server is running. The project comes with a default connection to MongoDB using the connection string "mongodb://localhost:27017/adminjs_blog". If you wish to use a different one, update the MongoDB connection string in `src/app.ts`:

```typescript
mongoose.connect('your-mongodb-connection-string');
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.