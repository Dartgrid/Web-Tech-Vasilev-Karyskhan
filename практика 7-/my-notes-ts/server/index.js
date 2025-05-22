import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // встроенный body-parser

let notes = [
  { title: "Первая заметка", description: "Описание 1", price: "5000" }
];

// GET — получить все заметки
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// POST — добавить новую заметку
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  if (!newNote.title || !newNote.description || !newNote.price) {
    return res.status(400).json({ error: "Все поля обязательны" });
  }
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
