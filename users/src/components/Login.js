import React, { useState } from "react";

export default function Login({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const LoginToAxios = e => {
    e.preventDefault();
    login(formData);
    setFormData({
      username: "",
      password: ""
    });
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={e => LoginToAxios(e)}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={changeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
