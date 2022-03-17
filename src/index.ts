import express from 'express';
import statusRoute from './routes/status.route';
import usersRout from './routes/users.route';
import errorHandler from './middlewares/error-handling.middleware';

const app = express();

app.use(usersRout);
app.use(statusRoute);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000/")
});