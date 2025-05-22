import React, { useState } from "react";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom"; // Для перехода

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Для перехода

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Введите email и пароль!");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Ошибка входа");
      } else {
        // Сохраняем токен (для последующих запросов)
        localStorage.setItem("token", data.token);
        // Переходим на главную страницу (или куда хочешь)
        navigate("/");
      }
    } catch {
      setError("Ошибка сети");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Вход</h1>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
        <Button color="blue" size="medium" title="Войти" type="submit" />
      </form>
    </div>
  );
};

export default Login;
