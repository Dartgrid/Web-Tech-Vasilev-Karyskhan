import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Массив заметок в памяти
let notes = [
  { title: "Первая заметка", description: "Описание 1", price: "5000" }
];

// Получить все заметки
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Добавить новую заметку
app.post("/api/notes", (req, res) => {
  const note = req.body;
  if (!note.title || !note.description || !note.price) {
    return res.status(400).json({ error: "Все поля обязательны" });
  }
  notes.push(note);
  res.status(201).json(note);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
