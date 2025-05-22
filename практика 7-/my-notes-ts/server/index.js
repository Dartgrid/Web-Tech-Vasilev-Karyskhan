import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [];
let sessions = {}; // { token: userId }

function validateUser(data) {
  // Простая валидация: все поля не пустые
  return (
    data.name &&
    data.surname &&
    data.phone &&
    data.email &&
    data.role &&
    (data.role === 'admin' || data.role === 'user')
  );
}

// РЕГИСТРАЦИЯ
app.post('/api/register', (req, res) => {
  const { name, surname, phone, email, password, role } = req.body;
  if (!validateUser(req.body) || !password) {
    return res.status(400).json({ error: "Проверьте правильность заполнения полей" });
  }
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ error: "Такой email уже зарегистрирован" });
  }
  const user = { id: Date.now(), name, surname, phone, email, password, role };
  users.push(user);
  res.json({ message: "Регистрация успешна" });
});

// АВТОРИЗАЦИЯ
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Неверный email или пароль" });
  }
  const token = Math.random().toString(36).substring(2); // простой токен
  sessions[token] = user.id;
  res.json({ token, user: { name: user.name, role: user.role, email: user.email } });
});

// Получить профиль (по токену)
app.get('/api/profile', (req, res) => {
  const token = req.headers.authorization;
  const userId = sessions[token];
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(401).json({ error: "Нет доступа" });
  res.json({ name: user.name, role: user.role, email: user.email });
});

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
