import {Request, Response} from "express";

const express = require('express');
const index = express();
const port = 3000;

index.get('/', (req: Request, res: Response) => res.send('Hello World!'));

index.listen(port, () => console.log(`Example app listening on port ${port}!`));
