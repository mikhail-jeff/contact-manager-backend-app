const express = require('express');
const colors = require('colors');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

// * middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running on http:localhost:${PORT}`.brightMagenta.underline.italic);
});
