import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import TasksRouters from './routers/tasksRouter';
const app = express();

app.set('port', process.env.PORT || 3000);

const corsOptions={};
//middlewares
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.json({ message: 'Hola' })
});


app.use('/api/tasks', TasksRouters);

export default app;