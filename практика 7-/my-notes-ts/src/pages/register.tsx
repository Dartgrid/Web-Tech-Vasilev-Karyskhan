import React, { useState } from "react";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  setError("");
  setSuccess("");
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    // Примитивная валидация
    if (
      !form.name ||
      !form.surname ||
      !form.phone ||
      !form.email ||
      !form.password
    ) {
      setError("Заполните все поля!");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Ошибка регистрации");
      } else {
        setSuccess("Регистрация успешна! Теперь войдите.");
        setForm({
          name: "",
          surname: "",
          phone: "",
          email: "",
          password: "",
          role: "user",
        });
      }
    } catch {
      setError("Ошибка сети");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Регистрация</h1>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">{success}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          inputSize="medium"
          color="primary"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          inputSize="medium"
          color="primary"
          name="surname"
          placeholder="Фамилия"
          value={form.surname}
          onChange={handleChange}
        />
        <Input
          inputSize="medium"
          color="primary"
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          inputSize="medium"
          color="primary"
          name="email"
          placeholder="Почта"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          inputSize="medium"
          color="primary"
          name="password"
          placeholder="Пароль"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        >
          <option value="user">Пользователь</option>
          <option value="admin">Админ</option>
        </select>
        <Button color="blue" size="medium" title="Зарегистрироваться" type="submit" />
      </form>
    </div>
  );
};

export default Register;
