import express from 'express';
import router from './routes/interprete'

const app = express();
app.use(express.json());
const PORT = 3000;

// app.get('/ping', (req,res) => {
//     console.log('compiladores 1 si sale');
//     res.send('pongCompiladores1')
// });

app.use('/interprete', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});