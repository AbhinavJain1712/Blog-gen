import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-2qoixq1-shard-00-00.bpiqkdu.mongodb.net:27017,ac-2qoixq1-shard-00-01.bpiqkdu.mongodb.net:27017,ac-2qoixq1-shard-00-02.bpiqkdu.mongodb.net:27017/?replicaSet=atlas-4wk1kt-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;