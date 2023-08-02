import express from 'express';
import { setTimeout } from 'timers/promises';

const PORT = 4000;

const app = express();

app.get('/', async (_, res) => {
    await setTimeout(Math.ceil(Math.random() * 1000));
    res.json({ success: true });
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})