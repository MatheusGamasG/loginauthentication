import express, { Request, Response, NextFunction } from 'express';
import statusRoute from './routes/status.route';
import usersRout from './routes/users.route';

const app = express();

app.use(usersRout);
app.use(statusRoute);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("Server is up!")
});