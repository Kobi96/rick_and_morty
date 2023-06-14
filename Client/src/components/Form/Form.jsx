import React, { useState } from "react";
import style from "./Form.module.css";
import validator from "./validation";

function Form(props) {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validator(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      login(userData);
    }
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <label>Password</label>
        <input
          type="text"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <div></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
