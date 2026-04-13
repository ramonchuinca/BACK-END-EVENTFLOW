import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server rodando na porta ${PORT}`);
});

import eventRoutes from "./src/routes/eventRoutes.js";

app.use("/api/events", eventRoutes);