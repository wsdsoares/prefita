import React from "react";
import './styles.css';

const HomePage = () =>{
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form className="form">
        <div className="user-box">
          <input type="email" className="email" id="email" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" className="password" id="password"/>
          <label>Senha</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ACESSAR
        </a>
      </form>
    </div>
  );
}

export default HomePage