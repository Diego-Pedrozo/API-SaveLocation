const { Router } = require('express');
const router = Router();

const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port
})

router.post('/saveLocation', async (req, res) => {
    try {
        const { x, y } = req.body;

        await pool.query('INSERT INTO location (x, y) VALUES($1, $2)', [x, y]);
        res.send('Coordenadas guardadas');

    } catch (error) {
        res.send(error);
    }
})

module.exports = router;


