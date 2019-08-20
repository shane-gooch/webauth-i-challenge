import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Login from "./components//Login";
import SignUp from "./components/SignUp";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = user => {
    axios
      .post("http://localhost:5000/api/register", user)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const login = user => {
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const logout = () => {
    axios
      .get("http://localhost:5000/api/logout")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Login login={login} logout={logout} />
      <SignUp addUser={addUser} />
      <Users users={users} getUsers={getUsers} />
    </div>
  );
}

export default App;
