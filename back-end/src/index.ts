import express, { response } from "express";
import cors from "cors";
import { request } from "http";

const app = express();
app.use(express.json());

const PORT :number = 3000;
app.use(cors());

app.get("/ping", (req, res) :void => {
   console.log("alguien ha dado ping!!");
   res.setHeader("Content-Type", "applicarion/json");
   res.send("pong");
})
app.get("/hola/:nombre/:apellido", (req, res) :void => {
    res.setHeader("Content-Type", "applicarion/json");
    const nombre = req.params.nombre;
    const apellido= req.params.apellido;
    console.log("alguien ha ingresado sus nombres!!")
    res.send({nombre: nombre, apellido: apellido})
 })






app.listen(PORT, () => {
    console.log("Server running in port:" + PORT);
})

