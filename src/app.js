import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ROTA TESTE
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

let events = []; // memória temporária

// GET
app.get("/api/events", (req, res) => {
  res.json(events);
});

// POST
app.post("/api/events", (req, res) => {
  const newEvent = {
    id: Date.now().toString(),
    ...req.body,
  };

  events.push(newEvent);

  res.status(201).json(newEvent);
});

export default app;