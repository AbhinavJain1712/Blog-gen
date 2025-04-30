import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
 
    url: `mongodb://${username}:${password}@ac-2qoixq1-shard-00-00.bpiqkdu.mongodb.net:27017,ac-2qoixq1-shard-00-01.bpiqkdu.mongodb.net:27017,ac-2qoixq1-shard-00-02.bpiqkdu.mongodb.net:27017/?replicaSet=atlas-4wk1kt-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority`,
    
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 