import express from 'express';
import config from './db/config.js';
const app = express();

app.get("/", (req, res) => {
    res.send("Your Node server is running ");
});

app.listen(config.port || 5000, () => {
      console.log(`Server running`);
    });
