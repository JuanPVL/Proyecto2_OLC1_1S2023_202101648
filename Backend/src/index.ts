import express from 'express';
import cors from 'cors';
import router from './routes/interprete'

const app = express();
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options));
app.use(express.json());
const PORT = 5000;

// app.get('/ping', (req,res) => {
//     console.log('compiladores 1 si sale');
//     res.send('pongCompiladores1')
// });

app.use('/interprete', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});