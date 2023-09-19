const express = require('express');
const app = express();

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/API'));

app.get('/', (req, res) => {
    res.send('API SaveLocation')
})

const port = process.env.port || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));



