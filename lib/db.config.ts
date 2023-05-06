import mongoose from 'mongoose';

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;

const connectDB = async () => {
  // If MongoDB URI is not provided, throw error
  if (!MONGO_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
  }

  // If MongoDB is already connected, do nothing
  if (mongoose.connections[0].readyState) {
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  // Listen for MongoDB connection errors
  mongoose.connection.on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

  // Listen for MongoDB connection success
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });

  // Listen for MongoDB connection disconnection
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });
};

export default connectDB;
