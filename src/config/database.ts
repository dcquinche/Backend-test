import mongoose from 'mongoose';

async function configDataBase() {
  const uri = process.env.MONGO_DB_URI;

  if (!uri) {
    throw new Error("Uri is not Defined");
  }

  try {
    await mongoose.connect(uri)
    console.log('Connected to Macarenia Database');
  } catch (error) {
    console.log(error);
  }
}

export default configDataBase;
