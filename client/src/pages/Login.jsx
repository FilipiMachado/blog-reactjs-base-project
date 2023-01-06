import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
        <p>Ocorreu um erro!</p>
        <span>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
