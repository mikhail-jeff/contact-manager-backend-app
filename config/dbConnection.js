const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', true);
		const connect = await mongoose.connect(process.env.MONGO_URI);
		console.log('Database connected: '.brightMagenta.underline.italic, connect.connection.host, connect.connection.name);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
