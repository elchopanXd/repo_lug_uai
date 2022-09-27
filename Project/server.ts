import dotenv from "dotenv"; //importa
dotenv.config(); //configura

import express, { Express, Request, Response } from "express";
import mongoose from "mongoose"; 
import router from "./Routes";

const app: Express = express();

app.use(express.json({ limit: "10mb" })); //envio cosas desde postman
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

//setea el servidor... escucha el puerto y levanta el servidor
app.listen(process.env.PORT, () => {
  console.log(`Server is up and running at port ${process.env.PORT}`);
});

app.get("/", (req, res)=>{
res.send("Papas con calabaza")
})

interface User{
  name:string,
  lastName: string
}

const Users: User[]=[]

app.post("/", (req:Request<any,any,User>, res) => {
  Users.push(req.body)
  res.send(JSON.stringify({data:Users}))
})

connectToDb()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

async function connectToDb() {
  if (process.env.DB_CONNECTION_STRING) {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  } else {
    console.log("Connection string is missing");
  }
}


/*app.get("/:id", (req, res) => {
  const blodId = req.params.id
})*/

