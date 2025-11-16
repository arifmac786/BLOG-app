import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connInst = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Mongo db connection successful !! DB HOST :${connInst.connection.host}`
    );
  } catch (error) {
    console.log(`Mongo db connection ERROR : ${error}`);
    process.exit(1);
  }
};

export default connectDb;
