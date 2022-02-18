import mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1/tsc';

const connectDb = async () => {
    try {
        await mongoose.connect(uri)
        console.log('Connected to db ----> Success');

    } catch (error: any) {
        console.log(error.message);
        // Exit with failure
        process.exit(1);

    }
}

export default connectDb;
