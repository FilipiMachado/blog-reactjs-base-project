import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Cadastro de uma nova conta</h1>
      <form>
        <input required type="text" placeholder="Digite o nome da conta" />
        <input required type="email" placeholder="Digite o email" />
        <input required type="password" placeholder="Digite a senha" />
        <button>Cadastrar-se</button>
        <p>Ocorreu um erro!</p>
        <span>
          Já tem uma conta? <Link to="/login">Faça Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
