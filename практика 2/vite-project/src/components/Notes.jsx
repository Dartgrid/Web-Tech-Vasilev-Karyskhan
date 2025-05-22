import React, { useState } from "react";
import { Button } from "../shared/Button";
import {Input} from "../shared/Input"


const NoteCard = ({ title, description, price }) => (
  <div className="border rounded p-4 bg-white shadow mb-4">
    <h3 className="font-bold text-lg">{title}</h3>
    <textarea
              rows={5}
              className="w-full border rounded px-3 py-2 mb-2 text-base resize-y focus:outline-none focus:border-blue-500"
              placeholder="Описание"
              value={description}
            />
    <div className="text-blue-700 font-semibold mt-2">{price} ₽</div>
  </div>
);

const Notes = () => {
  const [notes, setNotes] = useState([
    { title: "Первая заметка", description: "Описание 1", price: "5000" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", price: "" });

  const addNote = () => {
    if (!form.title || !form.description || !form.price) return;
    setNotes([...notes, form]);
    setForm({ title: "", description: "", price: "" });
    setModalOpen(false);
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
            <Input
              size="medium"
              color="primary"
              placeholder="Название"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="mb-2 w-full"
            />
            <textarea
              rows={10}
              className="w-full border rounded px-3 py-2 mb-2 text-base resize-y focus:outline-none focus:border-blue-500"
              placeholder="Описание"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />

            <Input
              size="medium"
              color="blue"
              placeholder="Цена"
              type="number"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
              className="mb-4 w-full"
            />
            <div className="flex justify-end space-x-2">
              <Button
                color="gray"
                size="small"
                title="Отмена"
                onClick={() => setModalOpen(false)}
              />
              <Button
                color="blue"
                size="small"
                title="Добавить"
                onClick={addNote}
              />
            </div>
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
