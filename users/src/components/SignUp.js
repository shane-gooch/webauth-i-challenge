import React, { useState } from "react";

export default function SignUp({ addUser }) {
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

  const addUserToAxios = e => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      username: "",
      password: ""
    });
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={e => addUserToAxios(e)}>
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
