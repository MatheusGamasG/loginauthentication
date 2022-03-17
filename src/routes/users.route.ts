import { Router, Response, Request, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';


const usersRout = Router();

usersRout.get('/users', (req :Request, res :Response, next :NextFunction) => {
    const users = [ {username: 'Renan'}];
    res.status(StatusCodes.OK).send(users);
})

usersRout.get('/users/:uuid', (req :Request, res:Response, next :NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
})

usersRout.post('/users/', (req :Request, res: Response, next :NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send();
})

usersRout.put('/users/:uuid', (req :Request<{ uuid:string }>, res: Response, next :NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send();
})

usersRout.delete('/users/:uuid', (req :Request < { uuid : string } >, res: Response, next :NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})

export default usersRout;