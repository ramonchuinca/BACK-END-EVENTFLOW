import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("🟢 Mongo conectado");

    app.listen(PORT, () => {
      console.log(`🚀 Server rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error("🔴 Erro ao conectar no MongoDB:", error);
  }
}

startServer();