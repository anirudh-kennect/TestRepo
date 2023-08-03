import express from 'express';
import { setTimeout } from 'timers/promises';

const PORT = 4000;

const app = express();

const NUM = Math.ceil(Math.random() * 1000);

app.get('/', async (_, res) => {
    await setTimeout(Math.ceil(Math.random() * 1000));
    res.json({ success: true, NUM });
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})