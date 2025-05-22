import React, { useState, useEffect } from "react";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";
import { Textarea } from "../shared/TextArea";

type Note = {
  title: string;
  description: string;
  price: string;
};

const NoteCard: React.FC<Note> = ({ title, description, price }) => (
  <div className="border rounded p-4 bg-white shadow mb-4">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <Textarea
      textareaSize="medium"
      color="gray"
      value={description}
      readOnly
      rows={5}
      className="mb-2"
    />
    <div className="text-blue-700 font-semibold mt-2">{price} ₽</div>
  </div>
);

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<Note>({ title: "", description: "", price: "" });

  // Загрузить заметки при загрузке страницы
  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then((res) => res.json())
      .then(setNotes)
      .catch((err) => console.error("Ошибка при получении заметок:", err));
  }, []);

  // Добавить новую заметку (POST)
  const addNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.price) return;
    try {
      const response = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        const newNote = await response.json();
        setNotes((prev) => [...prev, newNote]);
        setForm({ title: "", description: "", price: "" });
        setModalOpen(false);
      }
    } catch (err) {
      console.error("Ошибка при добавлении заметки:", err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Button
        color="blue"
        size="medium"
        title="Добавить заметку"
        onClick={() => setModalOpen(true)}
      />

      {/* Модалка */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
            <h2 className="text-xl font-bold mb-4">Новая заметка</h2>
            <form onSubmit={addNote}>
              <Input
                inputSize="medium"
                color="primary"
                placeholder="Название"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="mb-2 w-full"
              />
              <Textarea
                textareaSize="medium"
                color="primary"
                placeholder="Описание"
                rows={6}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="mb-2"
              />
              <Input
                inputSize="medium"
                color="blue"
                placeholder="Цена"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="mb-4 w-full"
              />
              <div className="flex justify-end space-x-2">
                <Button
                  color="gray"
                  size="small"
                  title="Отмена"
                  onClick={() => setModalOpen(false)}
                  type="button"
                />
                <Button
                  color="blue"
                  size="small"
                  title="Добавить"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      <div>
        {notes.map((note, idx) => (
          <NoteCard key={idx} {...note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
