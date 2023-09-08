const express = require('express');
const app = express();

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/API'));

const port = process.env.port || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));



