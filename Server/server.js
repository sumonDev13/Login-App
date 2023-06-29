import  express from 'express';
import cors from 'cors';
import morgan from 'morgan'

const app = express();


/**middleware...... */

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about our stack



const port = 8080 ;


/**HTTP Get request............ */

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})


/**Server listening..... */

app.listen(port , ()=> {
    console.log(`server started on http://localhost:${port}`)
})