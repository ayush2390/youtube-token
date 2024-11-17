import express from "express"
import { generate } from "youtube-po-token-generator";
import cors from "cors"

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/api/token", async (req, res) => {
  try {
    const token = await generate();
    res.json({ poToken: token.poToken });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate PO token" });
  }
});

app.listen(PORT, () => {
  console.log(`Token server running on http://localhost:${PORT}`);
});
