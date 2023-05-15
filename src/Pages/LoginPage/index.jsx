import React from "react";
import './styles.css';

const LoginPage = () =>{
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  }
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="email" className="email" id="email" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" className="password" id="password"/>
          <label>Senha</label>
        </div>
        <button>
          ACESSAR
        </button>
      </form>
    </div>
  );
}

export default LoginPage