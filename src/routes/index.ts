import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ msg: 'hello world!' }));

export default routes;
