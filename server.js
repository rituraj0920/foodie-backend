const app = require("./src/app");
const connectDB = require("./src/db/db");
require('dotenv').config();

// Connect to the database
connectDB();

// Export the app for Vercel's serverless environment
module.exports = app;

// Only start the listener if we are NOT in Vercel's production environment
if (process.env.NODE_ENV !== "production") {
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
}