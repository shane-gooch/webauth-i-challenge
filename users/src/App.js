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

  useEffect(() => {
    const getUsers = () => {
      axiosWithAuth()
        .get("http://localhost:5000/api/users")
        .then(res => {
          setUsers(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <Login login={login} />
      <SignUp addUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
