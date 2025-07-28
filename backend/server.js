import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const server = express();
server.use(express.json()); 


dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.ATLAS_URI, {
    autoIndex: true})

server.post('/signup', (req, res) => {
    let { username, password, email } = req.body;
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
