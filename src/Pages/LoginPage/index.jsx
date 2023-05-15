import React, {useState} from "react";
import './styles.css';

const LoginPage = () =>{
  const [email,setEmail]  = useState("");
  const [password,setPassword]  = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit",{email, password});
  }
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="user-box">
          <input 
            type="email" 
            className="email" 
            id="email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input 
            type="password" 
            className="password" 
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
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