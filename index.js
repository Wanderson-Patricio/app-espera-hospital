import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexFileName = path.join(__dirname, ".", "index.html");
app.use(express.static(path.join(__dirname, ".")));
app.get("/", (req, res) => {
  res.sendFile(indexFileName);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}.`);
});