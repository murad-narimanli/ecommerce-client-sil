import React from "react";
import "../../assets/scss/Form.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import db from "../../db.json" 
const Login = () => {
  
  const navigate = useNavigate();
  const users = db.users;

  const registration = () => {
    navigate("/registration");
  };

  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");

  const handleLogin = (username, password) => {
      const user = users.find((obj) => obj.username === username && obj.password === password);
      if(user){
        navigate("/");
        console.log("user",user);
      }
  }

  return (
    <div className="container login">
      <div class="box">
        <span class="borderLine"></span>
        <form action="">
          <h2>Daxil Ol</h2>
          <div class="inputBox">
            <input onChange={(e) => setUsername(e.target.value)} type="text" required="required" />
            <span>İstifadəçi adı </span>
            <i></i>
          </div>
          <div class="inputBox">
            <input onChange={(e) => setPassword(e.target.value)} type="password" required="required" />
            <span>Şifrə</span>
            <i></i>
          </div>
          <div class="links">
            <a href="#">Şifrəni unutmusunuz?</a>
            <a onClick={registration} href="#">
              Qeydiyyat
            </a>
          </div>
          <button onClick={() => handleLogin(username,password)}>Daxil Ol</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
