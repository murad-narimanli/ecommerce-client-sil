import React, { useState } from "react";
import swal from "sweetalert";
import "../../assets/scss/Payment.scss";

function Payment() {
  const [formData, setFormData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const Alert = () => {
    swal({
      title: "Sifarişiniz Təsdiqləndi!",
      text: "Tez biz zamanda ünvana çatdırılacaq",
      icon: "success",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container">
      <h1>Sifariş</h1>
      <form onSubmit={handleSubmit} className="payment">
        <h4>Müştəri</h4>
        <label>
          Ödəniş
          <br />
          <div className="inputRadio">
            <label>
              Bank kartı ilə
              <br />
              <input type="radio" id="cart" name="payment" value="Card" />
            </label>
            <br />
            <label>
              Nağd
              <br />
              <input type="radio" id="cash" name="payment" value="Nagd" />
            </label>
          </div>
        </label>
        <br />
        <label>
          Ad Soyad
          <br />
          <input
            type="text"
            name="firstName"
            required="required"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          E-Mail
          <br />
          <input
            type="email"
            name="lastName"
            required="required"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Telefon
          <br />
          <input
            type="phone"
            name="lastName"
            required="required"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Kart
          <br />
          <input type="phone" required="required" onChange={handleChange} />
        </label>
        <br />
        <label>
          Rayon
          <br />
          <select required="required" onChange={handleChange}>
            <option value="" disabled selected>
              Zəhmət olmasa seçin...
            </option>
            <option value="0">Binəqədi rayonu </option>
            <option value="1">Qaradağ rayonu</option>
            <option value="2">Nərimanov rayonu </option>
            <option value="3">Nəsimi rayonu</option>
            <option value="4">Nizami rayonu </option>
            <option value="5">Sabunçu rayonu </option>
            <option value="6">Səbail rayonu </option>
            <option value="7">Suraxanı rayonu </option>
            <option value="8">Pirallahı rayonu </option>
            <option value="9">Xətai rayonu</option>
            <option value="10">Xəzər rayonu</option>
            <option value="11">Yasamal rayonu</option>
          </select>
        </label>
        <br />
        <label>
          Ünvan
          <br />
          <textarea required="required" />
        </label>
        <br />

        <button onClick={Alert}> Sifarişi Təsdiqlə </button>
      </form>
    </div>
  );
}

export default Payment;
