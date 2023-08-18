import mongoose from "mongoose";

const connectDB = async () => {
	try {
        mongoose.set('strictQuery', true);
		await mongoose.connect(process.env.MONGO_URL ||"");
		console.log(`MongoDB Connected Successfully!`);
	} catch (err) {
		console.log("error",err);
	}
};

export default connectDB;