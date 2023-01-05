const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const tasks = require('./routes/tasks');

const app = express();

//middleware 
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

app.listen(port, () => console.log(`listening on ${port}`));
