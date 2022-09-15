import express from 'express';

import { s78 } from './src'; 

const app = express();

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(s78("Vamo lakd"));
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on port: ${port}`))