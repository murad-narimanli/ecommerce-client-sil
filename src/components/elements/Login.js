import React from "react";
import "../../assets/scss/Form.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const registration = () => {
    navigate("/registration");
  };

  return (
    <div className="container login">
      <div class="box">
        <span class="borderLine"></span>
        <form action="">
          <h2>Daxil Ol</h2>
          <div class="inputBox">
            <input type="text" required="required" />
            <span>İstifadəçi adı </span>
            <i></i>
          </div>
          <div class="inputBox">
            <input type="password" required="required" />
            <span>Şifrə</span>
            <i></i>
          </div>
          <div class="links">
            <a href="#">Şifrəni unutmusunuz?</a>
            <a onClick={registration} href="#">
              Qeydiyyat
            </a>
          </div>
          <button>Daxil Ol</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
