import express, { response } from 'express';
import userRouter from './router/useRouter';
import connectDb from './db/db';
const app: express.Application = express();



// Connect db
connectDb()

// Host and port
const hostname: string = '127.0.0.1';
const port: number = 5000;


// middleware ---> form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to express typescript</h3>`)
})

// Configuration for router
app.use('/api', userRouter);


// Listen to server
app.listen(port, hostname, () => {
    console.log(`App running on ${hostname}:${port}`);

})