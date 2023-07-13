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
    <div className={style.form_container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.form_group}>
          <label className={style.label} for="email">
            Email
          </label>
          <input
            className={style.input}
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className={style.errors}>{errors.email}</p>}
        <div className={style.form_group}>
          <label for="password" className={style.label}>
            Password
          </label>
          <input
            className={style.input}
            type="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className={style.errors}>{errors.password}</p>}
        <button className={style.form_submit_btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
/*  <div className={style.form}>
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
    </div> */

export default Form;
