import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("");
  };

  console.log(inputs);

  return (
    <div className="auth">
      <h1>Cadastrar nova conta</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Digite o nome da conta"
          onChange={handleChange}
          name="username"
        />
        <input
          required
          type="email"
          placeholder="Digite o email"
          name="email"
        />
        <input
          required
          type="password"
          placeholder="Digite a senha"
          name="password"
        />
        <button onClick={handleSubmit}>Cadastrar-se</button>
        <p>Ocorreu um erro!</p>
        <span>
          Já tem uma conta? <Link to="/login">Faça Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
