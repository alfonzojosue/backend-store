import express, { Application, Request, Response } from 'express'
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

dotenv.config();
const app : Application = express();

//const routerApi = require('./routes');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));


app.get('/', (req : Request,res : Response) => {
    res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
});

//routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});
