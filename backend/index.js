import express from 'express';
import env from 'dotenv'
import userRouter from './routes/user.routes.js';
import  crudRouter from './routes/crud.routes.js';
import {connectDB} from './utils/db.js';
import cors from 'cors';
env.config();

const app = express();
const port = process.env.PORT || 3000;
connectDB()
app.use(cors({
    origin: 'https://www-products-management.netlify.app',
    credentials: true,
}));
app.use(express.json());

app.get('/' , (req , res) => {
    res.send("Hello World!");
});

app.use('/api/auth', userRouter);
app.use('/api/products', crudRouter);

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});