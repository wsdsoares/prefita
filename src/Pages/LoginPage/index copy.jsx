import React from "react";
import './styles.css';

const HomePage = () =>{
  return (
    <div id="login">
      <h1 className="title">Login Sistema</h1>
      <form className="form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" className="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="email">Senha</label>
          <input type="email" className="email" id="email" />
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage