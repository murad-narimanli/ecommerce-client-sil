import React from "react";
import "../../assets/scss/Form.scss";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const registration = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="registration">
        <div class="box">
          <span class="borderLine"></span>
          <form action="">
            <h2>Qeydiyyat</h2>
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
            <div class="inputBox">
              <input type="password" required="required" />
              <span>Şifrənin təsdiqi</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="email" required="required" />
              <span>E-Mail</span>
              <i></i>
            </div>
            <div class="links">
              <a href="#">Hesabınız var?</a>
              <a onClick={registration} href="#">
                Daxil ol
              </a>
            </div>
            <button>Qeydiyyat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
